import {View, Text, FlatList, Image, Pressable} from 'react-native';
import React from 'react';
import bookCover from '../../../assets/books/cover.jpg';

export default function Books({navigation}) {
  const bookData = [
    {
      id: 1,
      title: 'Apriori Algorithm',
      image: bookCover,
      pdfSource: require('../pdfs/ap.pdf'),
    },
    {
      id: 2,
      title: 'Association Rule',
      image: bookCover,
      pdfSource: require('../pdfs/ar.pdf'),
    },
    {
      id: 3,
      title: 'Bayesian Classification',
      image: bookCover,
      pdfSource: require('../pdfs/bc.pdf'),
    },
    {
      id: 4,
      title: 'Clustering',
      image: bookCover,
      pdfSource: require('../pdfs/c.pdf'),
    },
    {
      id: 5,
      title: 'Classification Algorithm',
      image: bookCover,
      pdfSource: require('../pdfs/ca.pdf'),
    },
    {
      id: 6,
      title: 'Data Mining',
      image: bookCover,
      pdfSource: require('../pdfs/dm.pdf'),
    },
    {
      id: 6,
      title: 'Decision Tree',
      image: bookCover,
      pdfSource: require('../pdfs/dtc.pdf'),
    },
  ];
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          // backgroundColor: "red",
          width: '100%',
        }}>
        <FlatList
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          data={bookData}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Pressable
              onPress={() => navigation.navigate('ViewBook', {bookData: item})}
              style={{
                width: 140,
                height: 220,
                borderWidth: 1,
                borderRadius: 10,
                margin: 20,
                backgroundColor: 'yellow',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}
                source={item.image}
              />
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  textAlign: 'center',
                }}>
                {item.title}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}
