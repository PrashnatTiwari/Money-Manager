import './index.css'

const HistoryTransaction = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="list-container">
      <h1 className="title">{title}</h1>
      <p className="title paragraph">Rs {amount}</p>
      <p className="title paragraph">{type}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        className="delete-image"
        alt="delete"
        onClick={onDeleteTransaction}
      />
    </li>
  )
}

export default HistoryTransaction
