import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Tooltip } from 'reactstrap';

const FormSample = ({
    label,
    type,
    value,
    name,
    onChange,
    htmlFor,
    id,
    tooltipText,
    placeholder,
    style,
}) => {

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => {
        setTooltipOpen(!tooltipOpen);
    }

    return (
        <div>
            <Form>
                <FormGroup style={style}>
                    <Label style={{ fontSize: '15px' }} htmlFor={htmlFor} >{label}</Label>
                    <Tooltip placement="bottom" isOpen={tooltipOpen} target={id} toggle={toggle}>
                        {tooltipText}
                    </Tooltip>
                    <Input
                        className="col-11"
                        id={id}
                        value={value}
                        name={name}
                        type={type}
                        onChange={onChange}
                        placeholder={placeholder}
                        style={{ height: '3vh', padding: '2px', }}
                        min={type === 'number' ? 0 : Infinity}
                        max={type === 'number' ? 50 : Infinity}
                    />
                </FormGroup>
            </Form>
        </div>
    )
}

export default FormSample;
