import { Fab } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { PlaceContext } from '../../context/PlaceContext';
import SimpleCard from '../SimpleCard';
import { Container } from './styles';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        position: 'fixed',
        bottom: '10px',
        right: '10px'
      }
    },
    fab: {
      animation: '$fadeIn 0.3s',
      width: '56px',
      height: '56px'
    },
    '@keyframes fadeIn': {
      '0%': {
        width: '0px',
        height: '0px',
        opacity: 0
      },
      '100%': {
        width: '56px',
        height: '56px',
        opacity: 1
      }
    }
  })
);

const Board: React.FC = () => {
  const context = useContext(PlaceContext);
  const [top, setTop] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    window.onscroll = () => setTop(document.documentElement.scrollTop);
  });

  return (
    <>
      <Container>
        {context?.places?.length === 0 && (
          <h2>Parece que você ainda não adicionou nenhum local...</h2>
        )}
        {context?.places?.map(place => (
          <SimpleCard place={place} key={place.id} />
        ))}
      </Container>

      {top > 0 && (
        <div className={classes.root}>
          <Fab
            className={classes.fab}
            color="secondary"
            onClick={() => window.scrollTo(0, 0)}
          >
            <MdKeyboardArrowUp size={30} />
          </Fab>
        </div>
      )}
    </>
  );
};

export default Board;
