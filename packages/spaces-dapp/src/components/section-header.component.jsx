import { HStack, Text, Spacer, Pressable } from 'native-base';

const SectionHeader = ({ title, action, actionText }) => (
  <HStack mx={4} mt={3} mb={2} width="85%">
    <Text fontWeight="medium" color="muted.600" fontSize="md">
      {title}
    </Text>
    <Spacer />
    {action && (
      <Pressable onPress={action}>
        <Text color="primary.800" fontSize="md" fontWeight="medium">
          {actionText}
        </Text>
      </Pressable>
    )}
  </HStack>
);

export default SectionHeader;
