import './index.css'

const historyItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteHistory(id)
  }
}
return (
  <li className="history-item">
    <p>{timeAccessed}</p>
    <img className="image-size" src={logoUrl} alt="domain logo" />
    <p>{title}</p>
    <p>{domainUrl}</p>
    <button type="button" className="delete-button" onClick={onDelete}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
      />
    </button>
  </li>
)

export default historyItem
