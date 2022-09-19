import React from 'react';
import ReactInstaStories from 'react-insta-stories';

function SeeMore() {
  return <div>see more</div>;
}

export default function App() {
  const stories = [
    {
      url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      seeMore: <SeeMore />,
      header: {
        heading: 'Dedé boteco',
        subheading: 'Posted 5h ago',
        profileImage: 'https://picsum.photos/1000/1000'
      }
    },
    {
      url:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80',
      header: {
        heading: 'Juvenal',
        subheading: 'Posted 32m ago',
        profileImage: 'https://picsum.photos/1080/1920'
      }
    },
    {
      url:
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80',
      header: {
        heading: 'Picanha Mania',
        subheading: 'Posted 32m ago',
        profileImage:
          'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
      }
    },
    {
      url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
      type: 'video',
      duration: 1000
    },
    {
      url:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      type: 'video',
      seeMore: <SeeMore />
    },
    {
      url:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      type: 'video'
    },
    'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'
  ];
  
  return (
    <ReactInstaStories
      stories={stories}
      defaultInterval={1500}
      width={400}
      height={768}
    />
  );
}

