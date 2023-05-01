import { useGetBannerListQuery } from "../services/banner.service";
import { AppModule, AsyncContentWrapper } from "components";
import { Button, Table } from "antd";
import { bannerListColumns } from "../constants";
import { PlusCircleFilled } from "@ant-design/icons";
import CreateBannerModal
  from "modules/banner/components/modal/CreateBannerModal";
import { useCallback } from "react";
import { useAppDispatch } from "store";
import { modalActions } from "store/modal/modal.slice";
import { ModalTypes } from "store/modal/modal.types";

const BannerList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isError, error, data } = useGetBannerListQuery();

  const toggleCreateBannerModal = useCallback(() => {
    dispatch(modalActions.toggle({
      modal: ModalTypes.CREATE_BANNER,
    }));
  }, []);

  return (
    <AsyncContentWrapper isLoading={isLoading} isError={isError} error={error}>
      <AppModule title="Banner List">
        <div className="flex items-center justify-end mb-2">
          <Button type="primary" icon={<PlusCircleFilled />}
                  onClick={toggleCreateBannerModal}>Add Banner</Button>
          <CreateBannerModal toggle={toggleCreateBannerModal} />
        </div>
        <Table
          dataSource={data?.data}
          columns={bannerListColumns}
          rowKey="id"
          pagination={false}
          className="g-table"
        />
      </AppModule>
    </AsyncContentWrapper>
  );
};

export default BannerList;
