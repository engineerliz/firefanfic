import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFicBySlug } from '../../actions/fics/getFics';
import {
  FlexCol,
  gapCss,
  preLineCss,
  View,
} from '../../components/layout/styles';
import FicModel from '../../models/fics/FicModel';
import { UserContext } from '../App';
import FicHeader from './FicHeader';
import ChapterModel from '../../models/chapters/ChapterModel';
import { List } from 'immutable';
import { getChaptersByFicId } from '../../actions/chapters/chapterActions';
import ChapterRow from '../../components/chapterRow/ChapterRow';
import { Paragraph, Subheading } from '../../components/styles/fonts';
import { colorCss, Colors } from '../../components/styles/colors';
import { trackPageView } from '../../analytics/analytics';
import {
  createSubscription,
  deleteSubscription,
  getSubscriptionByUserId,
} from '../../actions/subscriptions/subscriptionStore';
import SubscriptionModel from '../../actions/subscriptions/SubscriptionModel';
import FicBottomBar from '../../components/bottomBar/FicBottomBar';

const FicPage = () => {
  const { slug } = useParams();
  const { user } = useContext(UserContext);
  const [fic, setFic] = useState<FicModel>();
  const [isAuthor, setIsAuthor] = useState<boolean>();
  const [chapters, setChapters] = useState<List<ChapterModel>>();
  const [userSubscription, setUserSubscription] = useState<SubscriptionModel>();

  useEffect(() => {
    trackPageView('Fic Page');

    slug && getFicBySlug(slug).then((value) => value && setFic(value));
  }, []);

  useEffect(() => {
    setIsAuthor(user?.userId === fic?.createdBy);
    fic?.ficId &&
      getChaptersByFicId(fic?.ficId).then(
        (chapters) => chapters && setChapters(chapters),
      );
  }, [fic]);

  useEffect(() => {
    if (!isAuthor) {
      fic &&
        user &&
        getSubscriptionByUserId({
          ficId: fic.ficId,
          userId: user.userId,
        }).then((sub) => {
          console.log('ficpage getSubscriptionByUserId', sub);
          sub && setUserSubscription(sub);
        });
    }
  }, [isAuthor, fic]);

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
    console.log('ficpage userSubscription', userSubscription);
    return (
      <>
        <FicHeader fic={fic} />
        <View>
          <FlexCol className={gapCss(30)}>
            <FlexCol className={gapCss(2)}>
              <Subheading.SH12 className={colorCss(Colors.Gray.V3)}>
                Description
              </Subheading.SH12>
              <Paragraph.P12 className={preLineCss}>
                {fic.description}
              </Paragraph.P12>
            </FlexCol>
            <FlexCol className={gapCss(20)}>
              {chapters?.map((chapter) => {
                return chapter ? (
                  <ChapterRow chapter={chapter} key={chapter.id} fic={fic} />
                ) : (
                  <></>
                );
              })}
            </FlexCol>
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
  return <FlexCol></FlexCol>;
};

export default FicPage;
