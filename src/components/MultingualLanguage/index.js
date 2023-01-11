import {ListItemContainer, Button} from './styleComponents'

const MultilingualLanguage = props => {
  const {multiItem, changeButton, value} = props
  const {id, buttonText} = multiItem
  const changeId = () => {
    changeButton(id)
  }

  return (
    <ListItemContainer>
      <Button type="button" onClick={changeId} isActive={value === id}>
        {buttonText}
      </Button>
    </ListItemContainer>
  )
}
export default MultilingualLanguage
