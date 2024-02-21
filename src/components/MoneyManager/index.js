import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import HistoryTransaction from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: ' ',
    optionId: transactionTypeOptions[0].optionId,
    transactionsList: [],
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedTransactionList = transactionsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
      transactionsList: updatedTransactionList,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state

    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const {displayText} = typeOption

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeOptionId = event => {
    this.setState({
      optionId: event.target.value,
    })
  }

  onChangeTitle = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div className="bg-container">
        <div className="profile-container">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span className="app-name">Money Manager</span>
          </p>
        </div>
        <ul className="unordered-list-container">
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </ul>
        <div className="bottom-container">
          <form className="form-container" onSubmit={this.onAddTransaction}>
            <h1 className="form-heading">Add Transaction</h1>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <input
              id="title"
              type="text"
              placeholder="TITLE"
              className="label"
              onChange={this.onChangeTitle}
              value={titleInput}
            />
            <label className="label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              id="amount"
              type="text"
              placeholder="AMOUNT"
              className="label"
              onChange={this.onChangeAmount}
              value={amountInput}
            />
            <label className="label" htmlFor="select">
              TYPE
            </label>
            <select
              className="label"
              onChange={this.onChangeOptionId}
              id="select"
              value={optionId}
            >
              {transactionTypeOptions.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button className="button" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="form-heading">History</h1>
            <div className="headings-container">
              <h1>Title</h1>
              <h1>Amount</h1>
              <h1>Type</h1>
            </div>
            {transactionsList.map(eachTransaction => (
              <HistoryTransaction
                key={eachTransaction.id}
                transactionDetails={eachTransaction}
                deleteTransaction={this.deleteTransaction}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
