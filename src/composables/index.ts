export function useDocument() {
  const doc = ref<Document | undefined>();
  onMounted(() => (doc.value = document));
  return doc;
}
