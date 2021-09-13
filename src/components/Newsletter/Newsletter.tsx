import React, { 
    useState,
    useEffect
} from 'react';

import { Container } from './styles';

const Newsletter: React.FC = () => {
    const [name, setName] = useState(false)
    const [email, setEmail] = useState(false)
    const [buttonClicked, setButtonClicked] = useState(false)
    const [canSubmit, setCanSubmit] = useState(false)
    //name and email are monitored and return true when the HTML event validate the values
    useEffect(() => {
        console.log(name && email) 
    }, [name, email])
    //handle the submit event 
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setButtonClicked(true)
        if ( name && email){
            setCanSubmit(true)
        }
    }
  return (
      <Container>
          {
              canSubmit ? (
                  <div className="submited">
                    <span>
                        <strong>Seu e-mail foi cadastrado com sucesso!</strong> <br />
                            A partir de agora vou receberá as novidade e ofertas exclusivas!
                    </span>
                    <button onClick={()=>setCanSubmit(false)} >Cadastrar novo e-mail</button>
                  </div>
              ):(
                <>
                  <h4>Participe de nossas news com promoçõese novidades!</h4>
                  <form className="inputs-container">
                      <div>
                      <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      placeholder="Digite seu nome..."
                      onChange={e => setName(e.target.validity.valid)}
                      style={
                          buttonClicked && !name ?
                          {border: `1px solid #D7182A`}:
                          {}
                          }
                          />
                      {buttonClicked && !name  && <p>Digite um nome válido</p>}
                      </div>
                      <div>
                      <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      onChange={e => setEmail(e.target.validity.valid)} 
                      placeholder="Digite seu e-mail..." 
                      required
                      style={
                          buttonClicked && !email ?
                          {border: `1px solid #D7182A`}:
                          {}
                          }
                          />
                      {buttonClicked && !email  && <p>Digite um email válido</p>}
                      </div>
                  <button 
                  type="submit"
                  onClick={e => handleSubmit(e)}
                  >Eu quero!</button>
                  </form>
                </>
            )
          }
            
      </Container>
  );
}

export default Newsletter;