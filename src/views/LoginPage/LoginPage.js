import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import {Link} from "react-router-dom";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
//import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import jwt_decode from "jwt-decode";
import {useHistory} from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import {httpClient} from "../../core/http-client";

import image from "assets/img/log.jpg";
import Context from "../../Context";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {updateUser} = React.useContext(Context);
  const history = useHistory();
  React.useContext(Context);
  React.useEffect(() => {
    let mounted = true;
    if (mounted) {
      setTimeout(function () {
        setCardAnimation("");
      }, 700);
    }
    return () => {
      mounted = false;
    };
  }, []);

  const classes = useStyles();
  const {...rest} = props;
  const handleLogin = (username, password) => {
    httpClient.post('/token/', {
      nombre_usuario: username,
      password
    }).then(({data: {access, refresh}}) => {
      const user = jwt_decode(access).user;
      console.log(access);
      localStorage.setItem('token', access);
      localStorage.setItem('refresh', refresh);
      updateUser(user);
      history.push('/adminView');
    })
      .catch(reason => console.log(reason));
  }

  const header = <Header
    homeUrl="/" //TODO: A  veriguar como redirigir a home
    absolute
    color="transparent"
    brand="Arma Tu Fiesta"
    rightLinks={<HeaderLinks/>}
    {...rest}
  />;


  return (
    <div>
      {header}
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="/"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"}/>
                      </Button>
                      <Button
                        justIcon
                        href="/"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"}/>
                      </Button>
                      <Button
                        justIcon
                        href="/"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"}/>
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Tambien puedes...</p>
                  <CardBody>
                    <CustomInput
                      labelText="Nombre de usuario..."
                      id="text"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor}/>
                          </InputAdornment>
                        ),
                        onChange: e => setUsername(e.target.value)
                      }}
                    />
                    <CustomInput
                      labelText="Contraseña"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                        onChange: e => setPassword(e.target.value)
                      }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      //justify="center"
                      //size="lg"
                      onClick={(e) => handleLogin(username, password)}
                      fullWidth="true"
                    >
                      Inicia Sesión!
                    </Button>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Link to={"/register"} className={classes.link}>
                      <Button
                        className={classes.registerNavLink}
                        simple
                        color="primary"
                      >
                        ¿No tienes cuenta? Registrate!
                      </Button>
                    </Link>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont/>
      </div>
    </div>
  );
}
