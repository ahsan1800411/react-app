import styles from './Styling.module.css';

function Styling() {
  const name = {
    fontSize: '40px',
    color: 'red',
  };
  return (
    <div style={{ backgroundColor: 'teal' }}>
      <h1 style={{ color: 'white' }}>Ahsan Mumtaz</h1>
      <p style={name}>Age is 21</p>
      <h2 className='text-class'>BSCS</h2>
      <h3 className='programming'>I'm a Programming men </h3>
      <h4 className={styles.success}>Not a good one</h4>
      <h5 className={styles.error}>You are good</h5>
    </div>
  );
}

export default Styling;
