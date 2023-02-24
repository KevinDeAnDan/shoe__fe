/* eslint-disable react/destructuring-assignment */
import { Pagination } from 'antd';
import { useAppDispatch } from '../../redux/hooks';
import { getProductRequest } from '../../redux/actions';

type PropsType = {
  keySearch: string;
  limit: number;
  pageIndex: number;
  type: string;
  brand: string;
};
function Paginnation(props: PropsType) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispacth = useAppDispatch();
  const changePage = (page: number, pageSize: number) => {
      dispacth(getProductRequest({
        keySearch: props.keySearch,
        pageIndex: page,
        type: props.type,
        limit : pageSize,
        brand : props.brand
      }))
  };
  return (
    <div>
      <Pagination
        current={props.pageIndex}
        onChange={changePage}
        pageSize= {props.limit}
      />
    </div>
  );
}

export default Paginnation;
