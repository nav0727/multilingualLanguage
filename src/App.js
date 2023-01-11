import {Component} from 'react'

import MultilingualLanguage from './components/MultingualLanguage'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    isActive: languageGreetingsList[0].id,

    imgUrl: languageGreetingsList[0].imageUrl,
    imgAlt: languageGreetingsList[0].imageAltText,
  }

  changeButton = id => {
    //  const {isActive} = this.state
    const isAct = languageGreetingsList.map(each => each.id === id)
    // console.log(isAct.indexOf(true))
    const index = isAct.indexOf(true)

    this.setState({
      isActive: languageGreetingsList[index].id,

      imgUrl: languageGreetingsList[index].imageUrl,
      imgAlt: languageGreetingsList[index].imageAltText,
    })
  }

  render() {
    const {imgUrl, imgAlt, isActive} = this.state
    return (
      <div>
        <h1>Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(each => (
            <MultilingualLanguage
              key={each.id}
              multiItem={each}
              value={isActive}
              changeButton={this.changeButton}
            />
          ))}
        </ul>
        <img src={imgUrl} alt={imgAlt} />
      </div>
    )
  }
}

export default App
