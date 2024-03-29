import { css } from '@emotion/css';
import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <Link to={`/fic/${fic.slug}/${chapter.chapterIndex}`}>
      <FlexCol className={css(chapterRowStyles.container, gapCss(2))}>
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
    </Link>
  );
};

export default ChapterRow;
