import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

const IngredientsTable = ({
  columns,
  data,
}: {
  columns: ColumnsType<any>;
  data: TableData[] | any;
}) => {
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default React.memo(IngredientsTable);
