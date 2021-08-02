import './Email.css';

const Email = () => {
  return(
    <div className='email-container'>
      <h3>STAY CONNECTED</h3>
      <div className='email-paragraph'>
        <p>Join our email list for special offers and updates on events</p>
      </div>
      <div className='input-container'>
        <input type='email' placeholder='enter email address' />
        <button type='button'>JOIN</button>
      </div>
    </div>
  );
}

export default Email;
