import React, { useState, useEffect, useRef } from 'react';
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

  // Tạo thứ tự ngẫu nhiên cho quiz
  useEffect(() => {
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

    if (!isCorrect && !isReviewMode) {
      setWrongAnswers(prev => [...prev, currentCardIndex]);
    }

    setScore({
      correct: score.correct + (isCorrect ? 1 : 0),
      total: score.total + 1
    });

    setTimeout(() => {
      const nextIndex = flashcardIndex + 1;
      const totalQuestions = isReviewMode ? wrongAnswers.length : quizOrder.length;

      if (nextIndex >= totalQuestions) {
        const finalCorrect = score.correct + (isCorrect ? 1 : 0);
        const finalTotal = score.total + 1;

        if (isReviewMode || wrongAnswers.length === 0) {
          alert(`Hoàn thành! Điểm số: ${finalCorrect}/${finalTotal} (${Math.round((finalCorrect / finalTotal) * 100)}%)`);
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
          alert(`Bạn đã trả lời sai ${wrongAnswers.length} câu. Hãy ôn lại những câu đó!`);
          setIsReviewMode(true);
          setFlashcardIndex(0);
        }
        setUserInput('');
        setFeedback(null);
      } else {
        setFlashcardIndex(nextIndex);
        setUserInput('');
        setFeedback(null);
      }
    }, 1500);
  };

  // Table View - Bảng chuẩn Gojūon cho cả Hiragana & Katakana
  const TableView = () => {
    const isBasic = category === 'basic';

    // Bảng chuẩn Hiragana
    const hiraganaTable = [
      ['あ a', 'い i', 'う u', 'え e', 'お o'],
      ['か ka', 'き ki', 'く ku', 'け ke', 'こ ko'],
      ['さ sa', 'し shi', 'す su', 'せ se', 'そ so'],
      ['た ta', 'ち chi', 'つ tsu', 'て te', 'と to'],
      ['な na', 'に ni', 'ぬ nu', 'ね ne', 'の no'],
      ['は ha', 'ひ hi', 'ふ fu', 'へ he', 'ほ ho'],
      ['ま ma', 'み mi', 'む mu', 'め me', 'も mo'],
      ['や ya', '', 'ゆ yu', '', 'よ yo'],
      ['ら ra', 'り ri', 'る ru', 'れ re', 'ろ ro'],
      ['わ wa', '', '', '', 'を wo'],
      ['ん n', '', '', '', '']
    ];

    // Bảng chuẩn Katakana
    const katakanaTable = [
      ['ア a', 'イ i', 'ウ u', 'エ e', 'オ o'],
      ['カ ka', 'キ ki', 'ク ku', 'ケ ke', 'コ ko'],
      ['サ sa', 'シ shi', 'ス su', 'セ se', 'ソ so'],
      ['タ ta', 'チ chi', 'ツ tsu', 'テ te', 'ト to'],
      ['ナ na', 'ニ ni', 'ヌ nu', 'ネ ne', 'ノ no'],
      ['ハ ha', 'ヒ hi', 'フ fu', 'ヘ he', 'ホ ho'],
      ['マ ma', 'ミ mi', 'ム mu', 'メ me', 'モ mo'],
      ['ヤ ya', '', 'ユ yu', '', 'ヨ yo'],
      ['ラ ra', 'リ ri', 'ル ru', 'レ re', 'ロ ro'],
      ['ワ wa', '', '', '', 'ヲ wo'],
      ['ン n', '', '', '', '']
    ];

    const tableData = script === 'hiragana' ? hiraganaTable : katakanaTable;

    // Nếu không phải basic → dùng lưới phẳng
    if (!isBasic) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-5 gap-3">
            {currentCards.map(([char, romaji], idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border-2 border-blue-200 hover:border-blue-400 cursor-default transition-all hover:scale-105 hover:shadow-md text-center"
              >
                <div className="text-4xl font-bold text-gray-800 mb-1">{char}</div>
                <div className="text-sm text-gray-600 font-medium">{romaji}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Bảng chuẩn Gojūon
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
        <div className="min-w-max">
          <table className="w-full border-collapse">
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => {
                    if (!cell) {
                      return <td key={colIndex} className="p-3"></td>;
                    }
                    const [char, romaji] = cell.split(' ');
                    return (
                      <td
                        key={colIndex}
                        className="p-3 text-center border border-gray-300 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all hover:scale-105 cursor-default"
                      >
                        <div className="text-4xl font-bold text-gray-800 mb-1">{char}</div>
                        <div className="text-sm text-gray-600 font-medium">{romaji}</div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

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
    const inputRef = useRef(null);
    useEffect(() => {
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
            <li><strong>Bảng:</strong> Xem bảng chữ cái chuẩn Nhật Bản (Gojūon)</li>
            <li><strong>Flashcard:</strong> Click vào thẻ để xem romaji</li>
            <li><strong>Kiểm tra:</strong> Nhập romaji và kiểm tra kiến thức. Những câu sai sẽ được ôn lại sau khi hoàn thành.</li>
            <li><strong>Tổng hợp tất cả:</strong> Luyện tập với {getAllCards().length} ký tự</li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="mt-12 bg-white rounded-lg shadow-lg p-6 border-t-4 border-indigo-500">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} <span className="font-semibold text-indigo-600">VuGoJP</span>. 
                Học tiếng Nhật dễ dàng hơn với công cụ miễn phí.
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="https://www.facebook.com/nguyenvanvu0211" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15h-2.5v-3H8v-2c0-1.38 1.12-2.5 2.5-2.5H13v3h-2c-.28 0-.5.22-.5.5v1.5h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
                Facebook
              </a>
              <a href="https://github.com/vanvu0211" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:text-black transition-colors font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.753-1.334-1.753-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/vu-nguyen-van-872343351/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm13.5 11.3h-3v-5.4c0-1.29-.025-2.95-1.8-2.95-1.8 0-2.075 1.4-2.075 2.85v5.5h-3v-10h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.6z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;