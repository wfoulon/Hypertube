import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';
import { Fa, Button } from 'mdbreact'

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      show2: false,
      email: '',
      username: '',
      password: '',
      passwordConf: '',
      lname: '',
      fname: '',
      imageChanged: false,
      showPass: false,
      userImage: 'data:image/png;base64,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'
    };
    this.imageInput = null
    this.outImage = null
    this.errMail = null
    this.errUname = null
    this.PassRef = null
    this.goodRef = null
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e) => {
    var isValid = ValidateForm.validate('#first-form')
    if (isValid) {
      let mailRes = false
      let uRes = false
      Meteor.call('Users.CheckMail', {email: this.state.email}, (err, res) => {
        if (!err && res === true) {
          Meteor.call('Users.CheckUsername', {username: this.state.username}, (err, res) => {
            if (res && res === true) {
              if (this.state.password === this.state.passwordConf) {
                this.setState({show: false, show2: true})
              }
            }
          })
          mailRes = true
        } else if (!err) {
          this.errMail.innerText = 'Email already used'
        }
      })
      Meteor.call('Users.CheckUsername', {username: this.state.username}, (err, res) => {
        if (!err && res !== true) {
          this.errUname.innerText = 'Username already used'
        }
      })
      if (this.state.password !== this.state.passwordConf) {
        this.PassRef.innerText = "Passwords don't match"
      }
    }
    if (this.state.show2)
      var isValid2 = ValidateForm.validate('#second-form')
      if (isValid2) {
        let { email, username, password, lname, fname, userImage } = this.state
        Meteor.call('User.insert', {email, username, password, lname, fname, userImage}, (err, res) => {
          if (err) throw err
          else {
            this.goodRef.innerText = `Account created, you will receive a confirmation mail on ${email}.
            You will be redirected automaticaly.`
            setTimeout(() => {
              window.location = '/'
            }, 3000);
          }
        })
      }
  }

  openFile = (e) => {
    e.preventDefault()
    let input = e.target
    let reader = new FileReader()
    reader.onload = (e) => {
      let dataURL = reader.result
      this.outImage.src = dataURL
      this.setState({userImage: dataURL})
    }
    reader.readAsDataURL(input.files[0])
  }

  _handleValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {email, username, lname, fname, password, passwordConf} = this.state
    return (
      <div style={{position: 'relative'}}>
        <Fade top opposite when={this.state.show}>
          <div className='contentSignin' style={this.state.show? {zIndex: '200'} : {zIndex: '1'}}>
            <form className='signForm validate' id='first-form'>
              <div className='inputSign form-group'>
                <label className='inputLabel' htmlFor='email'>Email</label>
                <input className='mailInput' tabIndex={1} id='email' disabled={!this.state.show} onChange={this._handleValue} value={email} name='email' type='email' data-required data-email data-onblur/>
                <span ref={ref => this.errMail = ref} className='err-msg'></span>
              </div>
              <div className='inputSign'>
                <label className='inputLabel' htmlFor='username'>Username</label>
                <input className='mailInput' tabIndex={1} id='username' disabled={!this.state.show} onChange={this._handleValue} value={username} name='username' type='text' data-required data-onblur/>
                <span ref={ref => this.errUname = ref} className='err-msg'></span>
              </div>
              <div className='inputSign'>
                <label className='inputLabel' htmlFor='password'>Password</label>
                <input className='passInput no-order' tabIndex={2} id='password' disabled={!this.state.show} onChange={this._handleValue} value={password} name='password' type={this.state.showPass ? 'text' : 'password'} data-onblur data-min={6} data-required/>
                <Button onClick={e => {e.preventDefault(); this.setState({showPass: !this.state.showPass})}} color="blue-grey" className={this.state.showPass ? 'Show-button act' : 'Show-button'} size='small'><i className="fas fa-eye" aria-hidden="true"></i></Button>
                <span className='err-msg'></span>
              </div>
              <div className='inputSign'>
                <label className='inputLabel' htmlFor='passwordConf'>Confirm password</label>
                <input className='passInput no-order' tabIndex={2} id='passwordConf' disabled={!this.state.show} onChange={this._handleValue} value={passwordConf} name='passwordConf' type={this.state.showPass ? 'text' : 'password'} data-required data-onblur data-min={6}/>
                <span ref={ref => this.PassRef = ref} className='err-msg'></span>
              </div>
              {/* <Button type='button' className='newAcc-btn'>SIGN IN</Button> */}
              <Button type='button' color='#cc7b19' className='newAcc-btn' disabled={!this.state.show} onClick={this.handleClick}>{ this.state.show ? 'NEXT' : 'CREATE' }</Button>
            </form>
          </div>
        </Fade>
        <Fade top opposite when={this.state.show2}>
          <div className='contentSignin' style={this.state.show2? {zIndex: '200'} : {zIndex: '1'}}>
            <form className='signForm validate' id='second-form'>
              <div className='pic-content p-2'>
                <div id='prof-img'>
                  <img ref={ref => this.outImage = ref} src={this.state.userImage} alt='' id='imgmaggle' style={{width: '100%'}}/>
                  <input ref={elem => this.imageInput = elem} type="file" id="" onChange={this.openFile} name="newpic" style={{display: 'none'}} accept="image/*" data-required data-onblur/>
                  <div className='cam-icon' onClick={e => {e.preventDefault(); this.imageInput.click()}}>
                    <i className="fas fa-camera" style={{ fontSize: '14px', height: '25px', width: '25px', marginLeft: '1px' }} ></i>
                  </div>
                  <span className='err-msg'></span>
                  {/* <ModalPage setNotif={this.setNotif}/> */}
                </div>
              </div>
              <div className='inputSign'>
                <label className='inputLabel' htmlFor='fname'>First name</label>
                <input className='mailInput' tabIndex={1} id='fname' name='fname' disabled={!this.state.show2} onChange={this._handleValue} value={fname} type='text' data-required data-onblur/>
                <span className='err-msg'></span>
              </div>
              <div className='inputSign'>
                <label className='inputLabel' htmlFor='lname'>Last name</label>
                <input className='mailInput' tabIndex={1} id='lname' name='lname' disabled={!this.state.show2} onChange={this._handleValue} value={lname} type='text' data-required data-onblur/>
                <span className='err-msg'></span>
              </div>
              <Button type='button' color='#cc7b19' className='newAcc-btn' disabled={!this.state.show2} onClick={this.handleClick}>{ this.state.show ? 'NEXT' : 'CREATE' }</Button>
              <span ref={ref => this.goodRef = ref} style={{color: '#cc7b19'}}></span>
            </form>
          </div>
        </Fade>
      </div>
    );
  }
}
