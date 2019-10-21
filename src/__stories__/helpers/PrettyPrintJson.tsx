import React from 'react';
import styled from 'styled-components';

type PrintJsonProps = {
  readonly data: any;
  readonly header: string;
};

const PrintJsonRoot = styled.div`
  color: #fff;
  font-size: 1rem;
  margin-top: 25px;
  border-radius: 10px;
  background-color: #282c34;
`;

const PrintJsonPre = styled.pre`
  margin: 0;
  overflow: auto;
  font-size: 1em;
  padding: 10px 30px;
  display: inline-block;
  letter-spacing: 0.03em;
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
`;

const PrintJsonHeader = styled.div`
  color: #FAC863;
  line-height: 3;
  font-weight: 700;
  padding: 0px 15px;
  font-size: 1.15rem;
  border-radius: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background-color: #1D2027;
`;

const PrettyPrintJson = React.memo<PrintJsonProps>(({ data, header }) => {
  const jsonWithNoQuotes = (): string => {
    const json = JSON.stringify(data || {}, null, 2);
    return json.toString().replace(/"/g, '').replace(/\\/g, '');
  };

  return (
    <PrintJsonRoot>
      <PrintJsonHeader>{header}</PrintJsonHeader>
      <PrintJsonPre>{jsonWithNoQuotes()}</PrintJsonPre>
    </PrintJsonRoot>
  );
});

export default PrettyPrintJson;