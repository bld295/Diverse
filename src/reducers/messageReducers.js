import moment from 'moment';
import img1 from '../img/user1.jpg';
import img2 from '../img/user2.jpg';
import img3 from '../img/user3.jpg';
import img4 from '../img/user4.jpg';
import img5 from '../img/user5.jpg';
import img6 from '../img/user6.jpg';
import img7 from '../img/user7.jpg';

export default function () {
  return [
    {
      id: 1,
      name: 'Steven Gerrard',
      avatar: img1,
      detail: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit',
      time: moment().startOf('day').fromNow().toLocaleString(),
      read: false
    },
    {
      id: 2,
      name: 'john Doe',
      avatar: img2,
      detail: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit',
      time: moment().startOf('day').fromNow().toLocaleString(),
      read: false
    },

    {
      id: 3,
      name: 'Sadio White',
      avatar: img3,
      detail: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit',
      time: moment().startOf('day').fromNow().toLocaleString(),
      read: true
    },
    {
      id: 4,
      name: 'Ricky',
      avatar: img4,
      detail: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit',
      time: moment().startOf('day').fromNow().toLocaleString(),
      read: true
    },
    {
      id: 5,
      name: 'Steven Gerrard',
      avatar: img5,
      detail: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit',
      time: moment().startOf('day').fromNow().toLocaleString(),
      read: true
    },
    {
      id: 6,
      name: 'john Doe',
      avatar: img6,
      detail: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit',
      time: moment().startOf('day').fromNow().toLocaleString(),
      read: true
    },

    {
      id: 7,
      name: 'Sadio White',
      avatar: img7,
      detail: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit',
      time: moment().startOf('day').fromNow().toLocaleString(),
      read: true
    },
    {
      id: 8,
      name: 'Ricky',
      avatar: img4,
      detail: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit',
      time: moment().startOf('day').fromNow().toLocaleString(),
      read: true
    },
  ]
}
