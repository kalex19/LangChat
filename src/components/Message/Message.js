import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './styles';

const Message = props => {
	const { timestamp, username, id, setReferencedMessage, message } = props;
	const milliseconds = Date.now() - Date.parse(timestamp);
	const days = Math.floor(milliseconds / (60 * 60 * 24 * 1000));
	const timeElapsed = days === 0 ? 'Today' : days === 1 ? 'Yesterday' : `${days} days ago`;
	const initial = username[0].toUpperCase();

	return (
		<TouchableWithoutFeedback onLongPress={() => setReferencedMessage(id, message)}>
			<View style={styles.container}>
				<View style={styles.initialContainer}>
					<Text style={styles.initials}>{initial}</Text>
				</View>
				<View style={{ width: '100%' }}>
					<View style={styles.messageHeader}>
						<Text style={styles.username}>{username}</Text>
						<Text style={styles.timestamp}>{timeElapsed}</Text>
					</View>
					<View style={{ width: '85%' }}>{props.children}</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default Message;
