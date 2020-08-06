/*
import React from "react";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constants";

import * as S from "./styles";

const Login: React.FC = () => {
  return (
    <Layout>
      <S.Main>
        <S.Section>로긩</S.Section>
      </S.Main>
    </Layout>
  );
};

export default Login;
*/

import React from 'react';
import './login.css';
import Signin from '../../component/login/Signin';
import Signout from '../../component/login/Signout';
import Signup from '../../component/login/Signup';
//import Upload from './components/Upload';
//import CreateProject from './components/CreateProject';
//import ProjectDetail from './components/ProjectDetail';
import $ from "jquery";
import {} from "jquery.cookie";



class Login extends React.Component {


  render() {
    let logged;
    console.log($.cookie("login_email"))
    console.log($.cookie("login_userid"))
    if ($.cookie("login_email")!="null") {
      logged = true;
    } else {
      logged = false;
    }
    console.log(logged);

    return (

      <div className="App">
        {logged? <Signout /> : <div><Signin /><Signup /></div>}
        {/* <ProjectDetail projectID="Muse_Hysteria"/>
        <Upload projectID="Muse_Hysteria" userid={$.cookie("login_userid")}/> */}
      </div>
    )
  }
}


export default Login;