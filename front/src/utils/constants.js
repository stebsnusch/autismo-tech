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
    FOOTER: {
      LOGO: {
        height: '100px',
      },
      BACKGROUND: {
        backgroundColor: '#1C1C1C',
        color: '#fff'
      }
    }
  });