import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    justifyContent: 'flex-end',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    justifyContent: 'center',
  },
  platformText: {
    fontWeight: 'bold',
  },
});

type SectionProps = PropsWithChildren<{
  title: string;
  isAndroid: boolean;
  isIOS: boolean;
}>;

const Section: React.FC<SectionProps> = ({ title, isAndroid, isIOS, children }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        {title}
        {isAndroid && <Text style={styles.platformText}> Its Android!</Text>}
        {isIOS && <Text style={styles.platformText}> Its iOS!</Text>}
      </Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAndroid: state.section.isAndroid,
  isIOS: state.section.isIOS,
});

export default connect(mapStateToProps)(Section);
