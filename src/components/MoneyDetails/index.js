import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <>
      <li className="list-container-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p>Your Balance</p>
          <p className="font-size">Rs {balanceAmount}</p>
        </div>
      </li>
      <li className="list-container-1 list-container-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p>Your Income</p>
          <p className="font-size">Rs {incomeAmount}</p>
        </div>
      </li>

      <li className="list-container-1 list-container-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p>Your Expences</p>
          <p className="font-size">Rs {expensesAmount}</p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
