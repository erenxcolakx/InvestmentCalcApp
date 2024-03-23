import Input from './Input';

export default function InputContainer(props) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } = props.input;

  return (
    <div id='user-input'>
        <div className='input-group'>
          <Input
            label = "INITIAL INVESTMENT"
            type = 'number'
            name = 'initialInvestment'
            value = {initialInvestment}
            onChange = {props.onChange}
          />
          <Input
            label = "ANNUAL INVESTMENT"
            type = 'number'
            name = 'annualInvestment'
            value = {annualInvestment}
            onChange = {props.onChange}
          />
        </div>
        <div className='input-group'>
        <Input
            label = "EXPECTED RETURN"
            type = 'number'
            name = 'expectedReturn'
            value = {expectedReturn}
            onChange = {props.onChange}
          />
          <Input
            label = "DURATION"
            type = 'number'
            name = 'duration'
            value = {duration}
            onChange = {props.onChange}
          />
        </div>
      </div>
  )
}