import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Message from '../Message/Message';
import TextMessage from '../TextMessage/TextMessage';
import CorrectedMessage from '../CorrectedMessage/CorrectedMessage';

const MessageView = props => {
	const fakeMessages = [{id: 1, timestamp: Date.now(), username: 'Test', message: 'How are you?', referenced_message: 'How is you?'},{id: 2, timestamp: Date.now(), username: 'Other Test', message: 'Hey are you doing ok?', referenced_message:null}]
	return (
		<ScrollView
			ref={ref => (this.scrollView = ref)}
			style={styles.MessageView}
			alwaysBounceVertical
			keyboardDismissMode="on-drag"
			onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}>
			{fakeMessages.map(message => (
				<Message key={message.id} {...message} >
					{message.referenced_message ? 
					<CorrectedMessage message={message.message} referenced_message={message.referenced_message}/>
					:
					<TextMessage message={message.message}/>
				}
				</Message>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	MessageView: {
		backgroundColor: '#fff',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 15,
		flex: 4
	}
});

export default MessageView;
