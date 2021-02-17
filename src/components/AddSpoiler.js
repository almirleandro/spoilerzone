import React, { useState, useEffect } from 'react';

export default function AddSpoiler(props) {
  const [username, setUsername] = useState('');
  const [spoilerContent, setSpoilerContent] = useState('');

  const [haveData, setHaveData] = useState();
  const [whatData, setWhatData] = useState({});

  useEffect(() => {
    setUsername('');
    setSpoilerContent('');
    getSecondDB();
    // eslint-disable-next-line
  }, [props.filmeID]);

  // get data from secondRef
  async function getSecondDB() {
    const res = await fetch(`https://spoilerzone-server.herokuapp.com/fire/getdb`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        filmeID: props.filmeID
      })
    });
    const data = await res.json();
    
    const DBinfo = [data] // array with one object with the movie spoilers

    if (DBinfo[0] === null) { // Filme não contém spoilers ainda não revisadosconsole.log('sorry, no movie')
      setHaveData(false);
    } else { // Filme contém spoilers ainda não revisados
      setWhatData(DBinfo[0]);
      setHaveData(true);
    }
  }

  async function handleSubmit(e) {
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
      await fetch(`https://spoilerzone-server.herokuapp.com/fire/update`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
          filmeID: props.filmeID,
          content: oldData
        })
      });

    // else, create it
    } else {
      await fetch(`https://spoilerzone-server.herokuapp.com/fire/add`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
          filmeID: props.filmeID,
          content: inputObject
        })
      });
      getSecondDB();
    }

    // erase the input
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