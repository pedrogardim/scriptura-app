import { Text } from "@components";
import { graphqlRequest } from "@repo/common/utils/http";

const getChapter = `#graphql
query bible($book: String!, $chapter: Int!) {
  bible(input:{book: $book, chapter: $chapter}) {
    text
    verseNum
  }
}`;

interface BibleProps {
  params: { data: string[] };
  searchParams: { v?: string };
}
export default async function Bible({ params, searchParams }: BibleProps) {
  const { bible } = await graphqlRequest(getChapter, {
    book: (params.data && params.data[0]) || "gen",
    chapter: parseInt((params.data && params.data[1]) || "1"),
  });

  return (
    <div className="flex flex-col items-center justify-center p-8 max-w-3xl">
      {params?.data?.join("-")} - {searchParams.v}
      <Text className="text-xl text-justify leading-9 text-gray-600">
        {bible?.map((verse: any) => (
          <Text>
            <Text
              className="text-gray-800 text-xs mx-2 align-middle pointer-events-none select-none"
              bold
            >
              {verse.verseNum}
            </Text>
            <Text className="align-middle hover:text-primary cursor-pointer">
              {verse.text}
            </Text>
          </Text>
        ))}
      </Text>
    </div>
  );
}
