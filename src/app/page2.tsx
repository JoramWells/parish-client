import Image from 'next/image'
import '/public/css/style.css'

export default function Home() {
  return (
    <main style={{
      margin: '0',
      boxSizing: 'border-box',
      width: '100%',
      height: '100vh'
    }}>
      <div style={{
        margin: 'auto',
        display: 'block',
        width: '45%',
        backgroundColor: 'white',
        padding: "20px",
        borderRadius: "15px",
        marginTop: "10rem"

      }}>
        <form autoComplete='off'>
          <div style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
          }}>
            <div className='text-xl font-bold' style={{
            }}>
              SignIn
            </div>
            <Image src='/imgs/close.svg' alt='close-icon' className='icon-response' height={15} width={15} />
          </div>

          <div style={{
            marginTop: "2rem"
          }}>
            <div className='text-gray-500'>Email Address</div>
            <input type="text" placeholder='Enter First Name' style={{
              border: "1px solid whitesmoke",
              padding: "10px",
              width: "100%",
              marginTop: "1rem"
            }} />
          </div>

          {/* Enter Password */}
          <div style={{
            marginTop: "2rem"
          }}>
            <div typeof='label' className='text-gray-500'>Password</div>
            <input type="text" placeholder='Enter First Name' style={{
              border: "1px solid whitesmoke",
              padding: "10px",
              marginTop: "1rem",
              width: "100%"
            }} />
          </div>

          <div style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <div style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center"
            }}>
              <input type="checkbox" />
              <div className='ml-2 text-sm text-gray-500'>Remember me</div>
            </div>
            <div className='text-blue-500 text-sm'>
              Fogort password, recover?
            </div>
          </div>
          <div style={{
            marginTop: '3rem',
            marginBottom: '2rem',
          }}>
            <div role='button' className='primary-btn rounded-md  p-2 text-white text-center' style={{
              display: 'block',
              margin: "auto",
              width: '70%',

            }}>Login</div>
          </div>




        </form>
      </div>

    </main>

  )
}
