import Spinner from 'react-bootstrap/Spinner';

export default function MySpiner() {
  return (
    <div style={{
      zIndex: 25,
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      top: '-300px',
      height: '90vh',
      width: '100%'
    }}>
      <div style={{
          display: 'flex',
          alignItems: 'center' 
        }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  )
}
