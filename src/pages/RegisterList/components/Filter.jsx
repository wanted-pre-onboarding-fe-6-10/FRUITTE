import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';

const Filter = ({ productData, setProductData, getRequest }) => {
  const [filterValue, setFilterValue] = useState({ product: '', show: '' });

  const onChange = e => {
    const { name, value } = e.target;
    setFilterValue(prev => ({ ...prev, [name]: value }));
  };

  const TitleSearch = () => {
    if (filterValue.product) {
      const filterData = productData.filter(data => {
        return data.title.includes(filterValue.product);
      });
      setProductData(filterData);
    } else {
      getRequest();
    }
  };

  const ShowSearch = () => {
    if (filterValue.show) {
      const filterData = productData.filter(data => {
        return `${data.isShow}` === filterValue.show;
      });
      setProductData(filterData);
    } else {
      getRequest();
    }
  };

  return (
    <FilterBox>
      <div>
        <LabelEl htmlFor="productSearch">
          <span>상품명</span>
          <input
            type="text"
            id="productSearch"
            name="product"
            placeholder="상품명 검색"
            style={{ padding: '4px 0' }}
            onChange={e => onChange(e)}
          />
        </LabelEl>
        <Button size="small" onClick={TitleSearch}>
          검색
        </Button>
      </div>
      <div>
        <LabelEl htmlFor="statusFilter">
          <span>상태</span>
          <SelectBox id="statusFilter" name="statusFilter" onChange={e => onChange(e)}>
            {FILTER_DATA.status.map((data, idx) => {
              return (
                <option key={idx} value={data.value}>
                  {data.optionName}
                </option>
              );
            })}
          </SelectBox>
        </LabelEl>
        <Button size="small">검색</Button>
      </div>
      <div>
        <LabelEl htmlFor="show">
          <span>상품 노출</span>
          <SelectBox id="show" name="show" onChange={e => onChange(e)}>
            {FILTER_DATA.show.map((data, idx) => {
              return (
                <option key={idx} value={data.value}>
                  {data.showName}
                </option>
              );
            })}
          </SelectBox>
        </LabelEl>
        <Button size="small" onClick={ShowSearch}>
          검색
        </Button>
      </div>
    </FilterBox>
  );
};

const FilterBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: 1.5rem;
  border: 0.6px solid black;
  border-radius: 5px;
  background-color: lightgray;
`;

const LabelEl = styled.label`
  font-weight: bolder;
  margin-right: 1.5rem;

  span {
    padding-right: 1rem;
  }
`;

const SelectBox = styled.select`
  width: 9rem;
  padding: 4px 0;
`;

export default Filter;

const FILTER_DATA = {
  status: [
    { value: '', optionName: '전체' },
    { value: 'isSoldout', optionName: '품절' },
    { value: 'isDiscount', optionName: '할인' },
    { value: 'isBest', optionName: 'Best' },
    { value: 'isPending', optionName: '준비중' },
  ],
  show: [
    { value: '', showName: '전체' },
    { value: 'true', showName: 'on' },
    { value: 'false', showName: 'off' },
  ],
};
