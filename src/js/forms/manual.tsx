import * as React from 'react';
import Field from '../fields/fields';


interface Props {

};


interface State {
  valid: boolean
};


export default class Manual extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    console.log('form props', props);

    this.state = {
      valid: true
    };
  }


  protected onFormChange(evt) {
    console.log('onFormChange', evt);
  }


  protected onFieldUpdate(name:string, error:boolean, errorMessage:string) {
    // console.log('onFieldUpdate', error);

    this.setState({
       valid: (!error)
    });
  }


  protected validate() {
    console.log('validate');
  }


  protected submit(evt) {
    console.log('submitForm');
  }


  public render() {
    let provinceChoices: Array<[string, string]> = [['bc', 'BC'], ['ab', 'AB']];

    return (
      <form id="qualification_form_manual_id" onChange={this.onFormChange}>
        <Field.Text
          id="qualification_unit_id"
          name="unit"
          label="Unit number"
          className="field_short"
          onUpdate={this.onFieldUpdate.bind(this)}
          validators="optional|numbers-only" />

        <Field.Text
          id="qualification_street_number_id"
          name="street_number"
          label="Street number"
          onUpdate={this.onFieldUpdate.bind(this)}
          validators="required"/>

        <Field.Text
          id="qualification_street_name_id"
          name="street_name"
          label="Street name"
          onUpdate={this.onFieldUpdate.bind(this)}
          validators="required"/>

        <Field.Text
          id="qualification_city_id"
          name="city"
          label="City"
          onUpdate={this.onFieldUpdate.bind(this)}
          validators="required"/>

        <Field.Select
          options={provinceChoices}
          defaultText="Select"
          id="qualification_province_id"
          name="province"
          label="Province"
          className="field_short"
          onUpdate={this.onFieldUpdate.bind(this)}
          validators="required"/>

        <button type="submit" onClick={this.submit}>Submit</button>
      </form>
    );
  }
}
