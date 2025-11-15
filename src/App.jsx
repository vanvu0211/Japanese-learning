import React, { useState } from 'react';
import { RefreshCw, Check, X, BookOpen, Grid3x3 } from 'lucide-react';

const App = () => {
  const hiraganaData = {
    basic: [
      ['あ', 'a'], ['い', 'i'], ['う', 'u'], ['え', 'e'], ['お', 'o'],
      ['か', 'ka'], ['き', 'ki'], ['く', 'ku'], ['け', 'ke'], ['こ', 'ko'],
      ['さ', 'sa'], ['し', 'shi'], ['す', 'su'], ['せ', 'se'], ['そ', 'so'],
      ['た', 'ta'], ['ち', 'chi'], ['つ', 'tsu'], ['て', 'te'], ['と', 'to'],
      ['な', 'na'], ['に', 'ni'], ['ぬ', 'nu'], ['ね', 'ne'], ['の', 'no'],
      ['は', 'ha'], ['ひ', 'hi'], ['ふ', 'fu'], ['へ', 'he'], ['ほ', 'ho'],
      ['ま', 'ma'], ['み', 'mi'], ['む', 'mu'], ['め', 'me'], ['も', 'mo'],
      ['や', 'ya'], ['ゆ', 'yu'], ['よ', 'yo'],
      ['ら', 'ra'], ['り', 'ri'], ['る', 'ru'], ['れ', 're'], ['ろ', 'ro'],
      ['わ', 'wa'], ['を', 'wo'], ['ん', 'n']
    ],
    dakuten: [
      ['が', 'ga'], ['ぎ', 'gi'], ['ぐ', 'gu'], ['げ', 'ge'], ['ご', 'go'],
      ['ざ', 'za'], ['じ', 'ji'], ['ず', 'zu'], ['ぜ', 'ze'], ['ぞ', 'zo'],
      ['だ', 'da'], ['ぢ', 'ji'], ['づ', 'zu'], ['で', 'de'], ['ど', 'do'],
      ['ば', 'ba'], ['び', 'bi'], ['ぶ', 'bu'], ['べ', 'be'], ['ぼ', 'bo'],
      ['ぱ', 'pa'], ['ぴ', 'pi'], ['ぷ', 'pu'], ['ぺ', 'pe'], ['ぽ', 'po']
    ],
    combo: [
      ['きゃ', 'kya'], ['きゅ', 'kyu'], ['きょ', 'kyo'],
      ['しゃ', 'sha'], ['しゅ', 'shu'], ['しょ', 'sho'],
      ['ちゃ', 'cha'], ['ちゅ', 'chu'], ['ちょ', 'cho'],
      ['にゃ', 'nya'], ['にゅ', 'nyu'], ['にょ', 'nyo'],
      ['ひゃ', 'hya'], ['ひゅ', 'hyu'], ['ひょ', 'hyo'],
      ['みゃ', 'mya'], ['みゅ', 'myu'], ['みょ', 'myo'],
      ['りゃ', 'rya'], ['りゅ', 'ryu'], ['りょ', 'ryo'],
      ['ぎゃ', 'gya'], ['ぎゅ', 'gyu'], ['ぎょ', 'gyo'],
      ['じゃ', 'ja'], ['じゅ', 'ju'], ['じょ', 'jo'],
      ['びゃ', 'bya'], ['びゅ', 'byu'], ['びょ', 'byo'],
      ['ぴゃ', 'pya'], ['ぴゅ', 'pyu'], ['ぴょ', 'pyo']
    ]
  };

  const katakanaData = {
    basic: [
      ['ア', 'a'], ['イ', 'i'], ['ウ', 'u'], ['エ', 'e'], ['オ', 'o'],
      ['カ', 'ka'], ['キ', 'ki'], ['ク', 'ku'], ['ケ', 'ke'], ['コ', 'ko'],
      ['サ', 'sa'], ['シ', 'shi'], ['ス', 'su'], ['セ', 'se'], ['ソ', 'so'],
      ['タ', 'ta'], ['チ', 'chi'], ['ツ', 'tsu'], ['テ', 'te'], ['ト', 'to'],
      ['ナ', 'na'], ['ニ', 'ni'], ['ヌ', 'nu'], ['ネ', 'ne'], ['ノ', 'no'],
      ['ハ', 'ha'], ['ヒ', 'hi'], ['フ', 'fu'], ['ヘ', 'he'], ['ホ', 'ho'],
      ['マ', 'ma'], ['ミ', 'mi'], ['ム', 'mu'], ['メ', 'me'], ['モ', 'mo'],
      ['ヤ', 'ya'], ['ユ', 'yu'], ['ヨ', 'yo'],
      ['ラ', 'ra'], ['リ', 'ri'], ['ル', 'ru'], ['レ', 're'], ['ロ', 'ro'],
      ['ワ', 'wa'], ['ヲ', 'wo'], ['ン', 'n']
    ],
    dakuten: [
      ['ガ', 'ga'], ['ギ', 'gi'], ['グ', 'gu'], ['ゲ', 'ge'], ['ゴ', 'go'],
      ['ザ', 'za'], ['ジ', 'ji'], ['ズ', 'zu'], ['ゼ', 'ze'], ['ゾ', 'zo'],
      ['ダ', 'da'], ['ヂ', 'ji'], ['ヅ', 'zu'], ['デ', 'de'], ['ド', 'do'],
      ['バ', 'ba'], ['ビ', 'bi'], ['ブ', 'bu'], ['ベ', 'be'], ['ボ', 'bo'],
      ['パ', 'pa'], ['ピ', 'pi'], ['プ', 'pu'], ['ペ', 'pe'], ['ポ', 'po']
    ],
    combo: [
      ['キャ', 'kya'], ['キュ', 'kyu'], ['キョ', 'kyo'],
      ['シャ', 'sha'], ['シュ', 'shu'], ['ショ', 'sho'],
      ['チャ', 'cha'], ['チュ', 'chu'], ['チョ', 'cho'],
      ['ニャ', 'nya'], ['ニュ', 'nyu'], ['ニョ', 'nyo'],
      ['ヒャ', 'hya'], ['ヒュ', 'hyu'], ['ヒョ', 'hyo'],
      ['ミャ', 'mya'], ['ミュ', 'myu'], ['ミョ', 'myo'],
      ['リャ', 'rya'], ['リュ', 'ryu'], ['リョ', 'ryo'],
      ['ギャ', 'gya'], ['ギュ', 'gyu'], ['ギョ', 'gyo'],
      ['ジャ', 'ja'], ['ジュ', 'ju'], ['ジョ', 'jo'],
      ['ビャ', 'bya'], ['ビュ', 'byu'], ['ビョ', 'byo'],
      ['ピャ', 'pya'], ['ピュ', 'pyu'], ['ピョ', 'pyo']
    ]
  };

  const [mode, setMode] = useState('table');
  const [script, setScript] = useState('hiragana');
  const [category, setCategory] = useState('basic');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [feedback, setFeedback] = useState(null);
  const [quizOrder, setQuizOrder] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [isReviewMode, setIsReviewMode] = useState(false);

  const currentData = script === 'hiragana' ? hiraganaData : katakanaData;
  const getAllCards = () => [...currentData.basic, ...currentData.dakuten, ...currentData.combo];
  const currentCards = category === 'all' ? getAllCards() : currentData[category];

  // Tạo thứ tự ngẫu nhiên cho quiz khi thay đổi category/script/mode
  React.useEffect(() => {
    if (mode === 'quiz') {
      const indices = Array.from({ length: currentCards.length }, (_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      setQuizOrder(indices);
      setFlashcardIndex(0);
      setUserInput('');
      setFeedback(null);
      setWrongAnswers([]);
      setIsReviewMode(false);
      setScore({ correct: 0, total: 0 });
    }
  }, [mode, category, script, currentCards.length]);

  const nextCard = () => {
    setFlashcardIndex((prev) => (prev + 1) % currentCards.length);
    setShowAnswer(false);
    setUserInput('');
    setFeedback(null);
  };

  const shuffleCards = () => {
    setFlashcardIndex(Math.floor(Math.random() * currentCards.length));
    setShowAnswer(false);
    setUserInput('');
    setFeedback(null);
  };

  const checkAnswer = () => {
    const currentOrderList = isReviewMode ? wrongAnswers : quizOrder;
    const currentCardIndex = currentOrderList[flashcardIndex];
    const correct = currentCards[currentCardIndex][1];
    const isCorrect = userInput.trim().toLowerCase() === correct.toLowerCase();

    setFeedback(isCorrect ? 'correct' : 'incorrect');
    
    // Nếu sai, thêm vào danh sách câu sai (chỉ khi không phải review mode)
    if (!isCorrect && !isReviewMode) {
      setWrongAnswers(prev => [...prev, currentCardIndex]);
    }
    
    setScore({
      correct: score.correct + (isCorrect ? 1 : 0),
      total: score.total + 1
    });

    // Kiểm tra nếu đã hết câu hỏi
    setTimeout(() => {
      const nextIndex = flashcardIndex + 1;
      const totalQuestions = isReviewMode ? wrongAnswers.length : quizOrder.length;
      
      if (nextIndex >= totalQuestions) {
        // Nếu đang ở review mode hoặc không có câu sai, kết thúc
        if (isReviewMode || wrongAnswers.length === 0) {
          alert(`Hoàn thành! Điểm số: ${score.correct + (isCorrect ? 1 : 0)}/${score.total + 1} (${Math.round(((score.correct + (isCorrect ? 1 : 0)) / (score.total + 1)) * 100)}%)`);
          // Reset quiz
          const indices = Array.from({ length: currentCards.length }, (_, i) => i);
          for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
          }
          setQuizOrder(indices);
          setFlashcardIndex(0);
          setWrongAnswers([]);
          setIsReviewMode(false);
          setScore({ correct: 0, total: 0 });
        } else {
          // Chuyển sang review mode với những câu sai
          alert(`Bạn đã trả lời sai ${wrongAnswers.length} câu. Hãy ôn lại những câu đó!`);
          setIsReviewMode(true);
          setFlashcardIndex(0);
        }
        setUserInput('');
        setFeedback(null);
      } else {
        nextCard();
      }
    }, 1500);
  };

  // Table View
  const TableView = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-5 gap-3">
        {currentCards.map(([char, romaji], idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border-2 border-blue-200 hover:border-blue-400 cursor-default transition-all hover:scale-105 hover:shadow-md"
          >
            <div className="text-4xl font-bold text-center text-gray-800 mb-2">{char}</div>
            <div className="text-sm text-center text-gray-600 font-medium">{romaji}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // Flashcard View
  const FlashcardView = () => (
    <div className="flex flex-col items-center">
      <div
        className="bg-white rounded-2xl shadow-2xl p-12 mb-6 w-96 h-64 flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <div className="text-8xl font-bold text-gray-800 mb-4">
          {currentCards[flashcardIndex][0]}
        </div>
        {showAnswer && (
          <div className="text-3xl text-blue-600 font-semibold">
            {currentCards[flashcardIndex][1]}
          </div>
        )}
      </div>

      <div className="flex gap-4 mb-6">
        <button onClick={shuffleCards} className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
          <RefreshCw size={20} /> Ngẫu nhiên
        </button>
        <button onClick={nextCard} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
          Tiếp theo
        </button>
      </div>
      <div className="text-gray-600">Thẻ {flashcardIndex + 1} / {currentCards.length}</div>
    </div>
  );

  // Quiz View
  const QuizView = () => {
    const inputRef = React.useRef(null);

    React.useEffect(() => {
      if (inputRef.current && !feedback) {
        inputRef.current.focus();
      }
    }, [flashcardIndex, feedback]);

    const currentOrderList = isReviewMode ? wrongAnswers : quizOrder;
    const currentCardIndex = currentOrderList[flashcardIndex] || 0;
    const currentCard = currentCards[currentCardIndex];
    const totalQuestions = isReviewMode ? wrongAnswers.length : quizOrder.length;

    return (
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-2xl shadow-2xl p-12 mb-6 w-96">
          <div className="text-8xl font-bold text-center text-gray-800 mb-8">
            {currentCard[0]}
          </div>

          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && userInput.trim() && checkAnswer()}
            placeholder="Nhập romaji (vd: ka, shi, tsu)"
            className={`w-full px-4 py-3 border-2 rounded-lg text-center text-xl mb-4 transition-colors ${
              feedback === 'correct' ? 'border-green-500 bg-green-50' :
              feedback === 'incorrect' ? 'border-red-500 bg-red-50' :
              'border-gray-300 focus:border-blue-500'
            }`}
            autoFocus
          />

          {feedback && (
            <div className={`flex items-center justify-center gap-2 mb-4 text-lg font-semibold ${
              feedback === 'correct' ? 'text-green-600' : 'text-red-600'
            }`}>
              {feedback === 'correct' ? (
                <><Check size={24} /> Chính xác!</>
              ) : (
                <><X size={24} /> Sai! Đáp án: {currentCard[1]}</>
              )}
            </div>
          )}

          <button
            onClick={checkAnswer}
            disabled={!userInput.trim() || feedback}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Kiểm tra
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{score.correct}/{score.total}</div>
            <div className="text-gray-600">Điểm số</div>
            {score.total > 0 && (
              <div className="text-sm text-gray-500 mt-1">
                Tỷ lệ đúng: {Math.round((score.correct / score.total) * 100)}%
              </div>
            )}
            {isReviewMode && (
              <div className="mt-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                Đang ôn lại câu sai
              </div>
            )}
          </div>
        </div>

        <div className="text-gray-600">
          Câu {flashcardIndex + 1} / {totalQuestions}
          {isReviewMode && <span className="text-orange-600 ml-2">(Ôn tập)</span>}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">
          Học Bảng Chữ Cái Tiếng Nhật
        </h1>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Chế độ</label>
              <div className="flex gap-2">
                <button onClick={() => setMode('table')} className={`flex-1 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${mode === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                  <Grid3x3 size={18} /> Bảng
                </button>
                <button onClick={() => setMode('flashcard')} className={`flex-1 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${mode === 'flashcard' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                  <BookOpen size={18} /> Flashcard
                </button>
                <button onClick={() => setMode('quiz')} className={`flex-1 px-4 py-2 rounded-lg transition-colors ${mode === 'quiz' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                  Kiểm tra
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Bộ chữ</label>
              <div className="flex gap-2">
                <button onClick={() => setScript('hiragana')} className={`flex-1 px-4 py-2 rounded-lg transition-colors ${script === 'hiragana' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                  Hiragana
                </button>
                <button onClick={() => setScript('katakana')} className={`flex-1 px-4 py-2 rounded-lg transition-colors ${script === 'katakana' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                  Katakana
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Loại</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              >
                <option value="basic">Cơ bản (Gojūon)</option>
                <option value="dakuten">Biến âm (Dakuten)</option>
                <option value="combo">Âm ghép (Yōon)</option>
                <option value="all">Tổng hợp tất cả</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div>
          {mode === 'table' && <TableView />}
          {mode === 'flashcard' && <FlashcardView />}
          {mode === 'quiz' && <QuizView />}
        </div>

        {/* Info */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800">Hướng dẫn:</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Bảng:</strong> Xem bảng chữ cái</li>
            <li><strong>Flashcard:</strong> Click vào thẻ để xem romaji</li>
            <li><strong>Kiểm tra:</strong> Nhập romaji và kiểm tra kiến thức. Những câu sai sẽ được ôn lại sau khi hoàn thành.</li>
            <li><strong>Tổng hợp tất cả:</strong> Luyện tập với {getAllCards().length} ký tự</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;