import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
class Rezome extends React.Component {
    render() {
        return ( <
            GitHubProfile / >
        )
    }
}

class GitHubProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
        fetch('https://api.github.com/users/mohamadimahnaz')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    avatarUrl: data.avatar_url,
                    name: data.name,
                    username: data.login,
                    location: data.location,
                    company: data.company
                })
            })
    }

    render() {
        return ( < div > <
            div className = 'rh-profile-container' >
            <
            img src = { this.state.avatarUrl }
            /> <
            p > { this.state.username } < /p> <
            p > { this.state.name } < /p>

            <
            p > { this.state.location } < /p>   

            <
            /
            div >
            <
            div className = "lh-profile-container" >
            <
            Card / >
            <
            /
            div > < /div >
        )
    }
}
const cardContainer = document.querySelector('.react-card');

// React component for form inputs
class CardInput extends React.Component {
    render() {
        return ( <
            fieldset >
            <
            input name = { this.props.name }
            id = { this.props.id }
            type = { this.props.type || 'text' }
            placeholder = { this.props.placeholder }
            required / >
            <
            /fieldset>
        )
    }
}

// React component for textarea
class CardTextarea extends React.Component {
    render() {
        return ( <
            fieldset >
            <
            textarea name = { this.props.name }
            id = { this.props.id }
            placeholder = { this.props.placeholder }
            required > < /textarea> < /
            fieldset >
        )
    }
}

// React component for form button
class CardBtn extends React.Component {
    render() {
        return ( <
            fieldset >
            <
            button className = { this.props.className }
            type = { this.props.type }
            value = { this.props.value } > { this.props.value } < /button> < /
            fieldset >
        )
    }
}

// React component for social profile links
class CardProfileLinks extends React.Component {
    render() {
        const profileLinks = ['twitter', 'linkedin', 'dribbble', 'facebook'];

        const linksList = profileLinks.map((link, index) =>
            <
            li key = { index } > < a href = '#' > < i className = { 'fa fa-' + link } > < /i></a > < /li>
        );

        return ( <
            div className = 'card-social-links' >
            <
            ul className = 'social-links' > { linksList } <
            /ul> < /
            div >
        )
    }
}

// React component for the front side of the card
class CardFront extends React.Component {
    render() {
        return ( <
            div className = 'card-side side-front' >
            <
            div className = 'container-fluid' >
            <
            div className = 'row' >
            <
            div className = 'col-xs-6' >
            <
            img src = '' / >
            <
            /div>

            <
            div className = 'col-xs-6 side-front-content' >
            <
            h1 > درباره من < /h1>

            <
            h2 > مهناز محمدی < /h2 >

            <
            p > مهناز محمدی 37 ساله متاهل و دارای یک فرزند می باشم, کارشناس برنامه نویسی وب از دانشگاه علمی و کاربردی شهرداری تهران و دانشجوی کارشناسی ارشد دانشگاه پیام نور در رشته نرم افزار هستم. < /p>

            <
            /
            div > <
            /div> < /
            div > <
            /div>
        )
    }
}

// React component for the back side of the card
class CardBack extends React.Component {
    render() {
        return ( <
            div className = 'card-side side-back' >
            <
            div className = 'container-fluid' >
            <
            h1 > تماس با من < /h1>

            <
            form formAction = ''
            className = 'card-form' >
            <
            div className = 'row' >
            <
            div className = 'col-xs-6' >
            <
            CardInput name = 'contactFirstName'
            id = 'contactFirstName'
            type = 'text'
            placeholder = 'نام خود را وارد کنید' / >
            <
            /div>

            <
            div className = 'col-xs-6' >
            <
            CardInput name = 'contactLastName'
            id = 'contactLastName'
            type = 'text'
            placeholder = 'نام خانوادگی خود را وارد کنید' / >
            <
            /div> < /
            div >

            <
            div className = 'row' >
            <
            div className = 'col-xs-6' >
            <
            CardInput name = 'contactEmail'
            id = 'contactEmail'
            type = 'email'
            placeholder = 'ایمیل خود را وارد کنید' / >
            <
            /div>

            <
            div className = 'col-xs-6' >
            <
            CardInput name = 'contactSubject'
            id = 'contactSubject'
            type = 'text'
            placeholder = 'موضوع' / >
            <
            /div> < /
            div >

            <
            CardTextarea name = 'contactMessage'
            id = 'contactMessage'
            placeholder = 'متن پیام' / >

            <
            CardBtn className = 'btn btn-primary'
            type = 'submit'
            value = 'ارسال پیام' / >
            <
            /form>

            <
            CardProfileLinks / >
            <
            /div> < /
            div >
        )
    }
}

// React component for the card (main component)
class Card extends React.Component {
    render() {
        return ( <
            div className = 'card-container' >
            <
            div className = 'card-body' >
            <
            CardBack / >

            <
            CardFront / >
            <
            /div> < /
            div >
        )
    }
}




ReactDOM.render( < Rezome / > , document.getElementById('root'))
export default Rezome