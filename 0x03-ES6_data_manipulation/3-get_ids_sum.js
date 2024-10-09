export default function getStudnetIdsSum(studnets) {
  // check if students is an array
  if (!Array.isArray(studnets)) {
    return [];
  }

  return studnets.reduce((sum, student) => sum + student.id, 0);
}
