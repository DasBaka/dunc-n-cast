import DialogComponent from '@/components/dialog/DialogComponent';
import DialogContent from '@/components/dialog/DialogContent';
import { CirclePlus } from '@tamagui/lucide-icons';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from 'tamagui';

const dialogContent = (
	<DialogContent
		title="rest"
		description="tesdt"
		closingText="Add Feed"
	/>
);

export default function LibraryView() {
	const navigation = useNavigation();
	useEffect(() => {
		navigation.setOptions({
			headerShown: true,
			headerRight: () => (
				<DialogComponent
					content={dialogContent}
					trigger={CirclePlus}
				/>
			),
		});
	}, [navigation]);

	return (
		<View>
			<View style={styles.titleContainer}>
				<Text>Welcome!</Text>
			</View>
			<View style={styles.stepContainer}>
				<Text>Step 1: Try it</Text>
				<Text>
					Edit <Text>app/(tabs)/index.tsx</Text> to see changes. Press <Text>{Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}</Text> to open developer
					tools.
				</Text>
			</View>
			<View style={styles.stepContainer}>
				<Text>Step 2: Explore</Text>
				<Text>Tap the Explore tab to learn more about what's included in this starter app.</Text>
			</View>
			<View style={styles.stepContainer}>
				<Text>Step 3: Get a fresh start</Text>
				<Text>
					When you're ready, run <Text>npm run reset-project</Text> to get a fresh <Text>app</Text> directory. This will move the current <Text>app</Text> to{' '}
					<Text>app-example</Text>.
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
