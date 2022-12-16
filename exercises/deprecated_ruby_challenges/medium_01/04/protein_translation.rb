# frozen_string_literal: true

# Translates codon series into aminoacids.
class Translation
  CODON_FORMAT = /[AUGC]{3}/.freeze
  CODONS = {
    'Methionine' => %w[AUG],
    'Phenylalanine' => %w[UUU UUC],
    'Leucine' => %w[UUA UUG],
    'Serine' => %w[UCU UCC UCA UCG],
    'Tyrosine' => %w[UAU UAC],
    'Cysteine' => %w[UGU UGC],
    'Tryptophan' => %w[UGG],
    'STOP' => %w[UAA UAG UGA]
  }.freeze

  def self.of_rna(rna_string)
    raise InvalidCodonError unless valid?(rna_string)

    sequence = []
    rna_string.scan(CODON_FORMAT).each do |codon|
      break if stop?(codon)
      sequence << of_codon(codon)
    end
    
    sequence.size == 1 ? sequence.first : sequence
  end
  
  def self.of_codon(codon)
    translated_codon = ''
    
    CODONS.each do |aminoacid, sequences|
      if sequences.include? codon
        translated_codon = aminoacid 
        break
      end
    end
    
    translated_codon
  end
  
  class << self
    private

    def stop?(codon)
      CODONS['STOP'].include?(codon)
    end

    def valid?(rna_string)
      (rna_string.size % 3).zero? && !rna_string.match?(/[^AUGC]/)
    end
  end  
end

class InvalidCodonError < StandardError; end
