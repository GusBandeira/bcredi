import React, { Component } from 'react'

// Style
import "./login.css"

// Components
import Input from '../../components/Input/Input';
import Checkbox from '../../components/Checkbox/Checkbox';
import Link from '../../components/Link/Link';
import Button from '../../components/Button/Button';
import Alert from '../../components/Alert/Alert'; 

// Validators
import { cpfMask, dateMask } from '../../utils/validations/FormMasks' 
import { validateEmail, validateCPF, validateDate, validatePassword } from '../../utils/validations/FormValidations' 

// Sources
import WomanBcredi from '../../images/mulher_bcredi.png'
import BcrediLogo from "../../images/bcredi.png"
import PoliticaPrivacidade from "../../documents/PoliticaPrivacidade.pdf"
import PoliticaUsoInformacoes from "../../documents/PoliticaUsoInformacoes.pdf"


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            formValues: {
                email: false,
                cpf: false,
                nascimento: false,
                senha: false,
                privacy: false
            },
            alert: false
        }
    }

    setFormValue = (value) => {
        const { state } = this
        this.setState({
            formValues: {
                ...state.formValues,
                ...value
            },
        })
    }

    submitForm = () => {
        const { state } = this
        this.setState({ triggerValidation: !state.triggerValidation })

        if(this.validateForm(state.formValues)){
            this.setState({ alert: true })
            setTimeout(() => this.setState({ alert: false }), 3000);
        }
    }

    validateForm(formArray){
        for (let i in formArray) {
            if (!formArray[i]) {
                return false;
            }
        }
        return true
    }

    render() {
        const { state } = this

        return (
            <React.Fragment>
                <div className="login">
                    <div className="login__banner">
                        <div className="login__image-container">
                            <img src={WomanBcredi} alt="bcredi" className="login__image"/>
                        </div>
                        <div className="login__image-text">
                            <div>
                                "Obtive crédito para capital de giro. O processo foi bem sucedido e tudo que foi abordado, foi cumprido"
                            </div>
                            <div>
                                <strong>Camila Bragança,</strong><br/>
                                Sideral Tecnologia
                            </div>
                        </div>
                    </div>
                    <div className="login__form-container">
                        <div className="login__header">
                            <Alert color="green" visibility={state.alert}>
                                Parabéns! Cadastro realizado com sucesso!
                            </Alert>
                            <img src={BcrediLogo} alt="logo bcredi" className="login__header--logo"/>
                        </div>
                        <div className="login__form">
                            <div className="login__form--title"> 
                                Criar meu Cadastro 
                            </div>
                            <div className="login__form--subtitle"> 
                                Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF 
                            </div>
                            <div>
                                <Input 
                                    type="text" 
                                    name="email" 
                                    title="E-mail" 
                                    placeholder="ana.maria@email.com" 
                                    maxLength={70} 
                                    validation={validateEmail}
                                    setFormValue={e => this.setFormValue(e)}
                                    triggerValidation={state.triggerValidation}
                                />
                                <div className="login__form--row">
                                    <div className="login__form--col">
                                        <Input 
                                            type="text" 
                                            name="cpf" 
                                            title="CPF" 
                                            placeholder="998.767.888-70" 
                                            maxLength={14} 
                                            mask={cpfMask} 
                                            validation={validateCPF}
                                            setFormValue={e => this.setFormValue(e)}
                                            triggerValidation={state.triggerValidation}
                                        />
                                    </div>
                                    <div className="login__form--col">
                                        <Input 
                                            type="text" 
                                            name="nascimento" 
                                            title="Data de nascimento" 
                                            placeholder="21/12/1990" 
                                            maxLength={10} 
                                            mask={dateMask} 
                                            validation={validateDate}
                                            setFormValue={e => this.setFormValue(e)}
                                            triggerValidation={state.triggerValidation}
                                        />
                                    </div>
                                </div>
                                <Input 
                                    type="password" 
                                    name="senha" 
                                    title="Senha" 
                                    maxLength={20} 
                                    validation={validatePassword}
                                    setFormValue={e => this.setFormValue(e)}
                                    triggerValidation={state.triggerValidation}
                                />
                                <div className="login__form--privacy-policy">
                                    <Checkbox 
                                        name="privacy" 
                                        setFormValue={e => this.setFormValue(e)}
                                    >
                                        Li e estou de acordo com a 
                                        <Link for={PoliticaPrivacidade}>
                                            Política de Privacidade
                                        </Link> 
                                        e a  
                                        <Link for={PoliticaUsoInformacoes}>
                                            Política de Uso de Informações.
                                        </Link>
                                    </Checkbox>
                                </div>
                            </div>
                            <div className="login__form--button-container">
                                <Button onClick={() => this.submitForm()}>
                                    <div className="login__form--button">
                                        <div className="locker-icon" />
                                        Cadastrar
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div className="login__footer">
                            Já fiz meu cadastro. 
                            <Link for={"https://www.bcredi.com.br/"}>
                                Entrar agora.
                            </Link>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }

    // render() {
    //     return (
            
    //         <div className="page">
    //                 <CoverImage>
    //                     <img src={friends} alt='About' />
    //                 </CoverImage>

    //                 <Formik
    //                     onSubmit={(values, { resetForm }) => {
    //                         this.onSubmit(values, resetForm)
    //                     }}
    //                     //validate={validateMember}
    //                     initialValues={{ userName: '', grade: '', password: '', confirm_password: '' }}
    //                     render={({ touched, errors, values, handleChange, handleBlur, handleSubmit }) => (
    //                         <form onSubmit={handleSubmit}>
    //                             <React.Fragment>
    //                                 <FormRow size='10' offset='1'>
    //                                     <Label>
    //                                         Nome de Usuário
    //                                         <Input onChange={handleChange} onBlur={handleBlur} value={values.userName} error={touched.userName && errors.userName}
    //                                             type="text" name="userName" placeholder="Nome" max="70" />
    //                                         <ErrorText color="red" error={touched.userName && errors.userName}>{errors.userName}</ErrorText>
    //                                     </Label>
    //                                 </FormRow>
    //                                 <FormRow size='10' offset='1'>
    //                                     <Label>
    //                                         Password
    //                                         <Input onChange={handleChange} onBlur={handleBlur} value={values.password} error={touched.password && errors.password}
    //                                             type="password" name="password" placeholder="Password" maxLength='50' />
    //                                         <ErrorText color="red" error={touched.password && errors.password}>{errors.password}</ErrorText>
    //                                     </Label>
    //                                 </FormRow>
    //                                 <FormRow size='10' offset='1'>
    //                                     <Button right type="submit">{'Entrar'}</Button>
    //                                 </FormRow>
    //                             </React.Fragment>
    //                         </form>
    //                     )}
    //                 />
    //         </div>
    //     )
    // }
}

export default Login