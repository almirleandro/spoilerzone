import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

export default function AddSpoiler(props) {
  const [username, setUsername] = useState('');
  const [spoilerContent, setSpoilerContent] = useState('');

  const [haveData, setHaveData] = useState();
  const [whatData, setWhatData] = useState({});
  const secondRef = firebase.firestore().collection("spoilersforanalysis");

  useEffect(() => {
    setUsername('');
    setSpoilerContent('');
    getSecondDB();
    // eslint-disable-next-line
  }, [props.filmeID]);

  // get data from secondRef
  function getSecondDB() {
    secondRef.onSnapshot((querySnapshot) => {
      const items = []; // contains all the second database
      querySnapshot.forEach((doc) => {
          items.push(doc.data());
      });
      
      const DBinfo = items.filter(item => item.id === props.filmeID); // array with one object with the movie spoilers
  
      if (DBinfo[0] === undefined) { // Filme não contém spoilers ainda não revisados
        setHaveData(false);
      } else { // Filme contém spoilers ainda não revisados
        setWhatData(DBinfo[0]);
        setHaveData(true);
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const inputObject = {
      id: props.filmeID,
      titulo: props.movieTitle,
      ano: props.movieYear,
      newInfo: [
        {
          spoilers: spoilerContent,
          usuario: username,
        }
      ]
    }

    // if secondRef has data already, update it
    if (haveData) {
      const oldData = whatData;
      oldData.newInfo.push(inputObject.newInfo[0])
      secondRef
        .doc(props.filmeID)
        .update(oldData)
        .catch((err) => {
          console.log(err);
        });

    } else {
      // else, create it
      secondRef
        .doc(props.filmeID)
        .set(inputObject)
        .catch((err) => {
          console.log(err);
        });
    }

    // erase the input
    setUsername('');
    setSpoilerContent('');
    alert('Obrigado por contribuir para o desenvolvimento do site!');
  }

  return (
    <div className='AddSpoiler'>
      <p id='SendSpoilerTitle'>Já assistiu esse filme? Envie{props.haveSpoilers ? ' mais' : null} alguns spoilers!</p>
      <form onSubmit={e => handleSubmit(e)}>
        <p id='movieName'>Filme: {props.movieTitle} {props.movieYear ? `(${props.movieYear})` : null}</p>
        <input placeholder='Seu nome' value={username} onChange={e => setUsername(e.target.value)}></input><br/>
        <textarea placeholder='Escreva os spoilers aqui' value={spoilerContent} onChange={e => setSpoilerContent(e.target.value)} required></textarea><br/>
        <p id='sendSpoilerMsg'>* Ao enviar dados para o site, tanto o seu nome quanto os spoilers enviados ficarão visíveis ao público. Os spoilers serão analisados e estarão sujeitos a alteração antes de serem publicados. Obrigado por sua contribuição!</p>
        <button>Enviar</button>
      </form>
    </div>
  )
}