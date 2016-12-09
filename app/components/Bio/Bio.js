import React from 'react'
import _ from 'lodash'

const Bio = ({myName, age, pronoun, favoriteActivity}) =>
  <div className='Bio'>
    <p>{myName} is {age}.</p>
    <p>{_.capitalize(pronoun.nominative)} enjoys {favoriteActivity}.</p>
  </div>

const propTypes = {
  myName: React.PropTypes.string,
  age: React.PropTypes.string,
  pronoun: React.PropTypes.object,
  favoriteActivity: React.PropTypes.string
}

export default Object.assign(Bio, propTypes)
