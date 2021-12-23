import Title from 'components/atoms/Title';
import React, { useEffect, useState } from 'react';
import usersIcon from 'assets/Users.svg';
import timelineIcon from 'assets/Timezone.svg';
import viewsIcon from 'assets/Views.svg';
import editIcon from 'assets/Edit.svg';
import closeIcon from 'assets/Close.svg';
import styled, { css } from 'styled-components';
import useToggle from 'hooks/useToggle';
import HoverIcon from 'components/molecules/HoverIcon';
import Field, { IconWrapper } from 'components/molecules/Field';
import { useModalContext } from 'context/ModalProvider';
import Text from 'components/atoms/Text';

const hover = css`
  &:hover {
    cursor: pointer;
    background-color: rgb(246, 246, 246);
  }
`;

const LocationContainer = styled.div`
  padding: 14px 24px;
  border-radius: 2px;
  border: ${({ isModal }) => (isModal ? 'none' : '1px solid rgba(0, 17, 34, 0.1)')};
  background-color: rgba(246, 246, 246, 0.2);
  max-width: ${({ isModal }) => (isModal ? '440px' : '340px')};
  height: auto;
  position: relative;

  ${({ isModal }) => !isModal && hover}
`;

const TitleWrapper = styled.div`
  margin-bottom: ${({ isModal }) => (isModal ? '30px' : '5px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  margin-top: 20px;
`;

const CloseIconButton = styled(IconWrapper)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  &:hover {
    background-color: rgb(246, 246, 246);
  }
`;

const Location = props => {
  const [views, setViews] = useState(0);
  const { isOpen, toggle, setModalData, modalData } = useModalContext();
  const { isOpen: isHover, toggle: setHover } = useToggle();

  const formatDate = () => {
    const dateArr = new Date(props.createdAt).toString().split(' ');
    return `${dateArr[4]} (${dateArr[5]})`;
  };
  const handleClick = () => {
    setViews(views => views + 1);
    setModalData(() => ({ ...props, views: views + 1 }));
  };

  useEffect(() => {
    if (props.id === modalData.id && !isOpen) toggle(true);
  }, [views]);

  return (
    <>
      <LocationContainer
        onClick={handleClick}
        onMouseEnter={() => !props.isModal && setHover(true)}
        onMouseLeave={() => !props.isModal && setHover(false)}
        isModal={props.isModal}
      >
        {!props.isModal && isHover && <HoverIcon icon={editIcon} alt="edit" />}
        <TitleWrapper isModal={props.isModal}>
          <Title variant={props.isModal ? 'h4' : 'h2'}>{props.name}</Title>
          {props.isModal && <CloseIconButton src={closeIcon} alt="Close" onClick={() => toggle(false)} />}
        </TitleWrapper>
        <div>
          <Field icon={usersIcon} alt="User" value={props.userCount} />
          <Field icon={timelineIcon} value={formatDate()} />
          <Field icon={viewsIcon} alt="View" value={props.isModal ? modalData.views : views} />
        </div>
        {props.isModal && (
          <DescriptionContainer>
            <Text variant="modalBody">Description</Text>
            <Text variant="standard">{props.description}</Text>
          </DescriptionContainer>
        )}
      </LocationContainer>
    </>
  );
};

export default Location;
