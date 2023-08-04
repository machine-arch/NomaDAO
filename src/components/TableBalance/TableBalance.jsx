import React from 'react';
import { styled } from 'styled-components';
import mini1 from '../../assets/images/mini.png';
import mini2 from '../../assets/images/mini2.png';

export default function TableBalance({ header, rows, setPopup }) {
  return (
    <Container>
      <TableHeader>
        <Row row={header.length}>
          {header.map((item) => (
            <Column key={item}>{item}</Column>
          ))}
        </Row>
      </TableHeader>
      <TableBody>
        {rows.map((row) => {
          return (
            <Row row={row.length}>
              {row.map((item, index) => (
                <Column
                  item={item}
                  onClick={() => {
                    item === 'Check Details' && setPopup(true);
                  }}
                >
                  {index === 0 && <Orange />} {index === 1 && <Yellow />}{' '}
                  {item === 'photos' ? (
                    <>
                      <SmallImage src={mini1} />
                      <SmallImage src={mini2} />
                    </>
                  ) : (
                    item
                  )}
                </Column>
              ))}
            </Row>
          );
        })}
      </TableBody>
      <TableFooter>
        <PrevPage>Previous page</PrevPage>
        <PageButton>1</PageButton>
        <PageButton>2</PageButton>
        <PageButton>3</PageButton>
        <PageButton>4</PageButton>
        <PageButton>5</PageButton>
        <PageButton>6</PageButton>
        <PageButton>7</PageButton>
        <PageButton>8</PageButton>
        <NextPage>Next page</NextPage>
      </TableFooter>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1360px;
  width: 132.5%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: 'Inter';
  //   align-items: center;
`;

const TableHeader = styled.div`
  color: var(--gray-800, #3f3f3f);
  font-size: 12px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  line-height: 16px;

  border-radius: 4px;
  background: var(--background-section, #f2f2f2);
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(3):not(${TableHeader} *) {
    margin-left: 50px;
    background-color: #deede5;
    border-radius: 4px;
    max-width: 120px;
    background-color: ${(props) => props.item === 'Confirmed' && '#deede5'};
    color: ${(props) => props.item === 'Confirmed' && '#427a5b'};

    background-color: ${(props) => props.item === 'Rejected' && '#EDDEDE'};
    color: ${(props) => props.item === 'Rejected' && '#7A4242'};

    background-color: ${(props) => props.item === 'Pending' && '#FDF8CE'};
    color: ${(props) => props.item === 'Pending' && '#938406'};

    background-color: ${(props) => props.item === 'Unverified' && '#D8D8D8'};
    color: ${(props) => props.item === 'Unverified' && '#5F5F5F'};
  }
  &:last-child:not(${TableHeader} *) {
    margin-left: 50px;
    border-radius: 4px;
    max-width: 120px;
    background: var(--blue, #0699d2);
    color: white;
    cursor: pointer;
  }
`;

const Row = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: ${(props) => {
    return `repeat(${props.row}, 1fr)`;
  }};
  &:not(${TableHeader} *) {
    margin-top: 20px;
  }
  &:last-child:not(${TableHeader} *) {
    margin-bottom: 8px;
  }
  padding: 0px 10px;
`;

const TableBody = styled.div`
  color: #616161;
  font-size: 12px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  background: var(--background-section, #f2f2f2);
`;

const TableFooter = styled.div`
  // position: absolute;
  // left: 459px;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  width: 1360px;
  height: 64px;
  border-radius: 0px 0px 5px 5px;
`;

const PrevPage = styled.div`
  color: #585858;
  margin-right: 20px;
`;

const PageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #d8d8d8;
  height: 20px;
  width: 20px;
  font-size: 12px;
  margin-inline: 5px;
`;

const NextPage = styled.div`
  color: #585858;
  margin-left: 20px;
`;

const Orange = styled.div`
  width: 25px;
  height: 25px;
  background-color: #fe7c31;
  border-radius: 50%;
  margin-right: 8px;
`;

const Yellow = styled.div`
  width: 25px;
  height: 25px;
  background-color: #ffde52;
  border-radius: 50%;
  margin-right: 8px;
`;

const SmallImage = styled.img`
  width: 40px;
  height: 40px;
  &:last-child {
    margin-left: 4px;
  }
`;
