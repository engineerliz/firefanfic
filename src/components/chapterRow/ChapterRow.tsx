import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ChapterModel from '../../models/chapters/ChapterModel';
import FicModel from '../../models/fics/FicModel';
import { FlexCol, gapCss } from '../layout/styles';
import { colorCss, Colors } from '../styles/colors';
import { Heading, Subheading, Paragraph } from '../styles/fonts';
import { chapterRowStyles } from './chapterRow.styles';

interface ChapterRowProps {
  chapter: ChapterModel;
  fic: FicModel;
}

const ChapterRow = ({ chapter, fic }: ChapterRowProps) => {
  const navigate = useNavigate();
  const [content, setContent] = useState<string>();

  return (
    <FlexCol
      className={css(chapterRowStyles.container, gapCss(2))}
      onClick={() => navigate(`/fic/${fic.slug}/${chapter.chapterIndex}`)}
    >
      <Subheading.SH12 className={colorCss(Colors.Gray.V3)}>
        Chapter {chapter.chapterIndex}
      </Subheading.SH12>
      <Heading.H14>{chapter.title}</Heading.H14>
      <Paragraph.P12
        color={Colors.Gray.V3}
        className={chapterRowStyles.content}
      >
        {chapter.preview}
      </Paragraph.P12>
    </FlexCol>
  );
};

export default ChapterRow;
