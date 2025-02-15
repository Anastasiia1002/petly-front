import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { getByCategory } from 'redux/notice/noticeOperations';
import { v4 as uuidv4 } from 'uuid';

import { Button, FilterList, Item, Wrapper } from './FilterBtn.styled';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import AddNoticeButton from '../AddNoticeButton/AddNoticeButton';

const buttons = [
  {
    btn: 'lost/found',
    link: 'lost-found',
  },
  {
    btn: 'in good hands',
    link: 'for-free',
  },
  {
    btn: 'sell',
    link: 'sell',
  },
];

const authButtons = [
  {
    btn: 'favorite ads',
    link: 'favorites',
  },
  {
    btn: 'my ads',
    link: 'personal',
  },
];

function FilterBtn() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const favoriteNotice = useSelector(state => state.auth.user.favorites);

  const [search] = useSearchParams();

  const page = search.get('page');

  const location = useLocation();
  const category = location.pathname.split('/')[2];

  // const handleClick = e => {
  //   if (e.target.name === category) {
  //   return dispatch(getByCategory({ category: e.target.name, page }));
  //   }
  // };
  useEffect(() => {
    if (category) {
      dispatch(getByCategory({ category: category, page }));
    }
  }, [category, dispatch, location.pathname, page, favoriteNotice]);

  return (
    <Wrapper>
      <FilterList>
        {buttons.map(b => (
          <Item key={uuidv4()}>
            <Button
              to={b.link === category ? '/notices' : b.link}
              name={b.link}
              // onClick={handleClick}
            >
              {b.btn}
            </Button>
          </Item>
        ))}
        {token &&
          authButtons.map(b => (
            <Item key={uuidv4()}>
              <Button
                to={b.link === category ? '/notices' : b.link}
                name={b.link}
                //  onClick={handleClick}
              >
                {b.btn}
              </Button>
            </Item>
          ))}
      </FilterList>
      <AddNoticeButton />
    </Wrapper>
  );
}

export default FilterBtn;
