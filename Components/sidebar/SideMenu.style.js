// this is the css file of the sideBar file
import Constants from 'expo-constants';
 
export default {
  container: {
    marginTop: Constants.statusBarHeight+44,
    paddingTop: 20,
    backgroundColor:'#393e46',
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
};