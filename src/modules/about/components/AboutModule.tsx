import { Alert, Button } from "antd";
import { useGetAboutQuery } from "../services/about.service";
import { AppModule, AsyncContentWrapper } from "components";
import AboutCard from "./AboutCard";
import { PlusCircleFilled } from "@ant-design/icons";
import { useAppDispatch } from "../../../store";
import { modalActions } from "../../../store/modal/modal.slice";
import { ModalTypes } from "../../../store/modal/modal.types";
import CreateAboutModal from "./modal/CreateAboutModal";

const AboutModule = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError, error } = useGetAboutQuery();

  const toggleCreateAboutModal = () => {
    dispatch(modalActions.toggle({
      modal: ModalTypes.CREATE_ABOUT,
    }));
  };

  return (
    <AsyncContentWrapper
      isLoading={isLoading}
      isError={isError}
      error={error}
    >
      <AppModule title="About">
        <div className="flex justify-end mb-4">
          <Button
            type="primary"
            icon={<PlusCircleFilled />}
            onClick={toggleCreateAboutModal}
          >
            Create new
          </Button>
          <CreateAboutModal toggle={toggleCreateAboutModal} />
        </div>
        {data && data.length > 0 ?
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{data.map((item) => (
            <AboutCard data={item} key={item.id} />
          ))}
          </div>
          : <Alert banner message="About data is empty, please create new data"
                   type="warning" rootClassName="h-12" />}
      </AppModule>
    </AsyncContentWrapper>
  );
};

export default AboutModule;
