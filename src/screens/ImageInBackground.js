import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
//import Form from './Form';
import Wallpaper from './wallpaper';
import UserExperience from './UserExperience';
//import ButtonSubmit from './ButtonSubmit';
//import SignupSection from './SignupSection';

export default class ImageInBackground extends Component {
    render() {
        return (
            <Wallpaper>
                <Logo />
                <UserExperience />
            </Wallpaper>
        );
    }
}