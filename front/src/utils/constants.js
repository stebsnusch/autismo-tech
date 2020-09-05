import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import GradeIcon from '@material-ui/icons/Grade';
import SchoolIcon from '@material-ui/icons/School';
import PostAddIcon from '@material-ui/icons/PostAdd';

export const MENU_OPTIONS = Object.freeze({
  APPLICANT: [
    {
      label: 'Procurar empresa',
      icon: <SearchIcon />,
      path: '/search/companies',
    },
    {
      label: 'Procurar vagas',
      icon: <SearchIcon />,
      path: '/search/positions',
    },
    {
      label: 'Avaliar empresa',
      icon: <GradeIcon />,
      path: '/rate-company',
    },
    {
      label: 'Procurar cursos',
      icon: <SchoolIcon />,
      path: '/search/courses',
    },
  ],
  COMPANY: [
    {
      label: 'Procurar candidatos',
      icon: <SearchIcon />,
      path: '/search/applicants',
    },
    {
      label: 'Ver avaliações',
      icon: <GradeIcon />,
      path: '/ratings',
    },
    {
      label: 'Central de capacitação',
      icon: <SchoolIcon />,
      path: '/learning-center',
    },
    {
      label: 'Criar publicação',
      icon: <PostAddIcon />,
      path: '/publish',
    },
  ]
});


export const STYLES = Object.freeze({
  PROFILE_AVATAR: {
    height: '200px',
    width: '200px',
  },
  COMPANIES_AVATAR: {
    BOX: {
      height: '100px',
      width: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    IMAGE: {
      width: '100%',
    }
  },
  CARD_SPACING: {
    padding: '10px',
  },
  MAIN_MENU: {
    fontSize: '30px',
  },
  HEADER_BACKGROUND: {
    color: '#fff',
    backgroundColor: '#092868',
    borderBottom: '10px solid #b70012',
  },
  PREMIUM_BACKGROUND: {
    color: '#fff',
    backgroundColor: '#092868',
  },
  PREMIUM_BACKGROUND2: {
    color: '#fff',
    backgroundColor: '#b70012',
  },
  FOOTER: {
    LOGO: {
      height: '100px',
    },
    BACKGROUND: {
      backgroundColor: '#1C1C1C',
      color: '#fff',
      borderTop: '10px solid #b70012',
    },
    LINKS: {
      color: "#fff",
      textDecoration: 'none',
      fontSize: '1.2rem',
    }
  },
  MAIN_CONTENT: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  TOOLTIPS: {
    maxWith: '300px',
  },
  WHITE_BUTTON: {
    color: '#fff',
    borderColor: '#fff',
  },
  COMPANY_LOGO: {
    BOX: {
      height: '300px',
      width: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    IMG: {
      width: '80%',
    }
  },
  FULLWIDTH: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  PREMIUM_MESSAGE: {
    color: '#092868',
  },
  PREMIUM_BUTTON: {
    borderColor: '#fece00',
    color: 'inherit',
    '&:hover': {
      backgroundColor: '#fece00',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#fece00',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
  PREMIUM_CARDS: {
    minHeight: '450px',
    minWidth: '300px',
    display: 'flex',
    flexGrow: 1,
    CHILDREN: {
      flexGrow: 1,
      display: 'flex',
      alignContent: 'stretch',
      justifyContent: 'stretch',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
    }
  },
  PREMIUM_ICONS: {
    backgroundColor: '#ffce00',
    color: '#fff',
    height: '200px',
    width: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});