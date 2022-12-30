import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getChapterByIndex } from '../../actions/chapters/chapterActions';
import { getFicBySlug } from '../../actions/fics/getFics';
import Header from '../../components/header/Header';
import { FlexCol, gapCss, View } from '../../components/layout/styles';
import { Colors } from '../../components/styles/colors';
import { Paragraph, Subheading, Title } from '../../components/styles/fonts';
import ChapterModel from '../../models/chapters/ChapterModel';
import FicModel from '../../models/fics/FicModel';
import { chapterPageStyles } from './chapterPage.styles';
import 'firebase/compat/storage';
import Firebase from 'firebase/compat/app';
import { getChapterContentId } from '../../actions/chapters/utils';
import { trackPageView } from '../../analytics/analytics';
import FicBottomBar from '../../components/bottomBar/FicBottomBar';
import SubscriptionModel from '../../actions/subscriptions/SubscriptionModel';
import {
  createSubscription,
  deleteSubscription,
  getSubscriptionByUserId,
} from '../../actions/subscriptions/subscriptionStore';
import { UserContext } from '../App';

const ChapterPage = () => {
  const { slug, chapterIndex } = useParams();
  const { user } = useContext(UserContext);

  const [fic, setFic] = useState<FicModel>();
  const [chapter, setChapter] = useState<ChapterModel>();
  const [content, setContent] = useState<string>();
  const [userSubscription, setUserSubscription] = useState<SubscriptionModel>();
  const [isAuthor, setIsAuthor] = useState<boolean>();
  const index = chapterIndex ? parseInt(chapterIndex) : 1;

  useEffect(() => {
    trackPageView('Chapter Page');
    getFicBySlug(slug).then((value) => value && setFic(value));
  }, []);

  useEffect(() => {
    fic?.ficId &&
      chapterIndex &&
      getChapterByIndex(fic?.ficId, index).then(
        (chapter) => chapter && setChapter(chapter),
      );

    setIsAuthor(user?.userId === fic?.createdBy);
  }, [fic]);

  useEffect(() => {
    if (!isAuthor) {
      fic &&
        user &&
        getSubscriptionByUserId({
          ficId: fic.ficId,
          userId: user.userId,
        }).then((sub) => sub && setUserSubscription(sub));
    }
  }, [isAuthor]);
  useEffect(() => {
    if (fic?.ficId && chapter?.id) {
      setTimeout(() => {
        Firebase.storage()
          .ref()
          .child(`/content/${getChapterContentId(fic?.ficId, chapter?.id)}`)
          .getDownloadURL()
          .then((url) => {
            fetch(url).then((r) => {
              r.text().then((data) => setContent(data));
            });
          });
      }, 50);
    }
  }, [chapter]);

  const onSubscribe = () => {
    fic &&
      createSubscription({
        userId: user.userId,
        ficId: fic.ficId,
      }).then((sub) => sub && setUserSubscription(sub));
  };

  const onUnsubscribe = () => {
    fic &&
      deleteSubscription({
        userId: user.userId,
        ficId: fic.ficId,
      });
    setUserSubscription(undefined);
  };

  if (fic) {
    return (
      <>
        <Header />
        <View>
          <FlexCol className={gapCss(15)}>
            <FlexCol className={gapCss(2)}>
              <Subheading.SH12 color={Colors.Gray.V3}>
                Chapter {index}
              </Subheading.SH12>
              <Title.T18>{chapter?.title}</Title.T18>
            </FlexCol>
            <Paragraph.P12 className={chapterPageStyles.content}>
              {content}
            </Paragraph.P12>
          </FlexCol>
        </View>
        <FicBottomBar
          fic={fic}
          isSubscribed={userSubscription !== undefined}
          isAuthor={isAuthor}
          onSubscribe={onSubscribe}
          onUnsubscribe={onUnsubscribe}
        />
      </>
    );
  }
  return <></>;
};

export default ChapterPage;
